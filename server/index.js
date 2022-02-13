const crypto = require('crypto');
var express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const { performance } = require('perf_hooks');
const randomID = () => crypto.randomBytes(8).toString("hex");
const UPDATE_USERINFO_INTERVAL = 16;
let USER_INFO_DB={};

// *****************mmobメイン処理**********************
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.sessionID = socket.id;
  socket.userID = randomID();
  socket.username = username;
  next();
});

// コネクション処理
io.on("connection",(socket) =>{
  var room = "";
  USER_INFO_DB[socket.sessionID] = {"userID":socket.userID, "username":socket.username, "cursorColor":"#FFFFFF", "location":"", x:0, y:0};
  console.log(socket.userID+"("+socket.username+") connected!");
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  // ユーザ情報の更新
  socket.on('updateUserInfo', function(userInfo){
    room = userInfo.location;
    if(USER_INFO_DB[socket.sessionID].location != room){
      if(USER_INFO_DB[socket.sessionID].location != ""){
        socket.leave(USER_INFO_DB[socket.sessionID].location);
      }
      socket.join(room);
      console.log(socket.userID+"("+socket.username+") changed room from "+USER_INFO_DB[socket.sessionID].location+" to "+room);
    }
    USER_INFO_DB[socket.sessionID] = {"userID":socket.userID, "username":userInfo.username, "cursorColor":userInfo.cursorColor, "location":room, "title":userInfo.title, x:userInfo.x, y:userInfo.y};
  }); 

  // 同じロケーションのプレイヤーにメッセージを送信
  socket.on('sendMessage', function(request){
    console.log(request.message);
    io.to(room).emit("receiveMessage",{"userID":socket.userID,"username":socket.username,"message":request.message});
  });

  // ログオフ
  socket.on("disconnect", () => {
    console.log(socket.userID+"("+socket.username+") disconnected!");
    delete USER_INFO_DB[socket.sessionID];
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);

// 全てのユーザに画面更新用の情報を送信(最大60FPS)
function updateUserInfo(){
  // 毎回部屋を検索している。遅くなりそう。
  const rooms = io.of("/").adapter.rooms;
  var regexp = new RegExp("http");
  for(r of rooms){
    const room = r[0];
    const clientIds = r[1];
    if (!regexp.test(room)){
      continue;
    }
    if (typeof clientIds === 'undefined') {
      continue;
    }
    var userInfoInRoom = {};
    for(const clientId of clientIds){
      userInfoInRoom[USER_INFO_DB[clientId].userID]={
        "username":USER_INFO_DB[clientId].username,
        "cursorColor":USER_INFO_DB[clientId].cursorColor,
        "location":USER_INFO_DB[clientId].location,
        "x":USER_INFO_DB[clientId].x,
        "y":USER_INFO_DB[clientId].y,
      }
    }
    io.to(room).emit("responseUserInfo",userInfoInRoom);  
  }
}
executePeriodically(updateUserInfo, UPDATE_USERINFO_INTERVAL);

// *****************API**********************
const UPDATE_API_INFO_INTERVAL = 1000;
let connections = {"connections":0};
let worldInfo = {};

// 現在の接続数
app.get("/api/connections", function (request, response) {
  response.json(connections);
});

// ワールド情報
app.get("/api/worldInfo", function (request, response) {
  response.json(worldInfo);
});

// APIで公開する現在の接続数を更新する
function updateAPIConnections(){
  connections["connections"]=Object.keys(USER_INFO_DB).length;
}

// APIで公開するワールド情報を更新する
function updateAPIWorldInfo(){
  let worldInfoTmp = {};
  for(let key in USER_INFO_DB){
    let location = USER_INFO_DB[key]["location"];
    let title = USER_INFO_DB[key]["title"];
    if(location == ""){continue;}
    let world = location.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if( world in worldInfoTmp){
      // 既にあるワールドならコネクション数を更新
      worldInfoTmp[world]["connections"] += 1;
      if(location in worldInfoTmp[world]["locations"]){
        // 既にあるロケーションならコネクション数を更新
        worldInfoTmp[world]["locations"][location]["connections"] += 1;
      }else{
        // 新しいロケーションなら追加
        worldInfoTmp[world]["locations"][location]={};
        worldInfoTmp[world]["locations"][location]["title"] = title;
        worldInfoTmp[world]["locations"][location]["connections"] = 1;
      }
    }else{
      // 新しいワールドなら追加
      worldInfoTmp[world]={};
      worldInfoTmp[world]["connections"] = 1;
      worldInfoTmp[world]["locations"] = {};
      // 新しいロケーションを追加
      worldInfoTmp[world]["locations"][location]={};
      worldInfoTmp[world]["locations"][location]["title"] = title;
      worldInfoTmp[world]["locations"][location]["connections"] = 1;
    }
  }
  // 接続の多い順にソート
  // worldInfo = Object.keys(worldInfoTmp).map((k)=>({ location: k, connections: worldInfoTmp[k] }));
  // worldInfo.sort((a, b) => b.connections - a.connections);
  worldInfo = worldInfoTmp;
}
executePeriodically(updateAPIConnections, UPDATE_API_INFO_INTERVAL);
executePeriodically(updateAPIWorldInfo, UPDATE_API_INFO_INTERVAL);


// *****************Utils**********************
// 定期的な間隔[ms]で関数を実行。関数の実行時間が指定した間隔を超える場合は関数終了後に即実行
function executePeriodically(fn, interval){
  const startTime = performance.now(); // 開始時間
  fn();
  const endTime = performance.now(); // 終了時間
  let delay = interval - (endTime - startTime);
  delay = delay > 0 ? Math.round(delay):0;
  setTimeout(executePeriodically,delay,fn,interval);
}

// 負荷テスト用DB増加関数
function TEST_addDB(){
  // wikipedia追加
  for(let i=0; i<50; i++){
    id = randomID();
    USER_INFO_DB[id] = {"userID":id, "username":`Player${id}`, "cursorColor":"#ffffff", "location":`https://ja.wikipedia.org/wiki/メインページ${id}`, "title":"メインページ", x:100, y:i*10+100};
  }
  // qiita追加
  for(let i=0; i<50; i++){
    id = randomID();
    USER_INFO_DB[id] = {"userID":id, "username":`Player${id}`, "cursorColor":"#ffffff", "location":`https://qiita.com/`, "title":"メインページ", x:100, y:i*10+100};
  }
}

// TEST_addDB();
