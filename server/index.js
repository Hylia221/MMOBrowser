const crypto = require('crypto');

const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

// function sha256(str){
//   return String(crypto.createHash('sha256').update(str, 'utf8').digest('hex'));
// }

var USER_INFO_DB={};
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  // socket.url = socket.handshake.url;
  next();
});

io.on("connection",(socket) =>{
  var username = socket.username;
  var room = "";
  USER_INFO_DB[socket.id] = {name:username, url:"", x:0, y:0};

  socket.on('updateUserInfo', function(userInfo){
    room = userInfo.url;
    console.log("id:"+socket.id+", name:"+userInfo.name+", url:"+room+", x:"+userInfo.x+", y:"+userInfo.y);
    if(USER_INFO_DB[socket.id].url != room){
      if(USER_INFO_DB[socket.id].url != ""){
        socket.leave(USER_INFO_DB[socket.id].url);
      }
      socket.join(room);
      console.log(username+"("+socket.id+") changed room from "+USER_INFO_DB[socket.id].url+" to "+room);
    }
    USER_INFO_DB[socket.id] = {name:userInfo.name, url:room, x:userInfo.x, y:userInfo.y};
  }); 

  socket.on('requestUserInfo', function(request){
    const rooms = io.of("/").adapter.rooms;
    var clientIds;
    for(r of rooms){
      if(r[0] == room){
        clientIds = r[1];
      }
    }

    if (typeof clientIds === 'undefined') {
      return;
    }
    var userInfoInRoom = {};
    for(const clientId of clientIds){
      userInfoInRoom[clientId]=USER_INFO_DB[clientId];
    }
    io.to(room).emit("responseUserInfo",userInfoInRoom);
  });
  
  socket.on('sendMessage', function(request){
    console.log(request.message);
    io.to(room).emit("receiveMessage",{"id":socket.id,"username":username,"message":request.message});
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