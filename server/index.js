const crypto = require('crypto');

const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

function sha256(str){
  return String(crypto.createHash('sha256').update(str, 'utf8').digest('hex'));
}

var USER_INFO_DB={};
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  socket.url = socket.handshake.url;
  next();
});

io.on("connection",(socket) =>{
  var username = socket.username;
  // var url =   socket.url;
  const url = sha256(socket.url);
  console.log(username+"("+socket.id+") connected.");
  socket.join(url);
  console.log(username+"("+socket.id+") joined room "+url);
  USER_INFO_DB[socket.id] = {name:username, url:url, x:0, y:0};

  socket.on('mouseMoved', function(userInfo){
    const hashedUrl = sha256(userInfo.url);
    console.log("id:"+socket.id+", name:"+userInfo.name+", url:"+hashedUrl+", x:"+userInfo.x+", y:"+userInfo.y);
    if(USER_INFO_DB[socket.id].url != hashedUrl){
      socket.leave(USER_INFO_DB[socket.id].url);
      socket.join(hashedUrl);
      console.log(username+"("+socket.id+") changed room from "+USER_INFO_DB[socket.id].url+" to "+hashedUrl);
    }
    USER_INFO_DB[socket.id] = {name:userInfo.name, url:hashedUrl, x:userInfo.x, y:userInfo.y};
  }); 

  socket.on('requestUserInfo', function(url){
    const hashedUrl = sha256(url.url);
    const rooms = io.of("/").adapter.rooms;
    var clientIds;
    for(room of rooms){
      if(room[0] == hashedUrl){
        clientIds = room[1];
      }
    }

    if (typeof clientIds === 'undefined') {
      return;
    }
    var userInfoInRoom = {};
    for(const clientId of clientIds){
      userInfoInRoom[clientId]=USER_INFO_DB[clientId];
    }
    io.to(hashedUrl).emit("responseUserInfo",userInfoInRoom);
  });
  
  socket.on("disconnect", () => {
    const username = socket.username;
    // const url = sha256(socket.url)
    // socket.leave(url);
    // console.log(username+"("+socket.id+") leaved room "+url);  
    console.log(username+"("+socket.id+") disconnected!");
    delete USER_INFO_DB[socket.id];
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);