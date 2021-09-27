const crypto = require('crypto');
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);
const randomID = () => crypto.randomBytes(8).toString("hex");

var USER_INFO_DB={};
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

io.on("connection",(socket) =>{
  var room = "";
  USER_INFO_DB[socket.sessionID] = {"userID":socket.userID, "username":socket.username, "cursorColor":"#FFFFFF", "location":"", x:0, y:0};
  console.log(socket.userID+"("+socket.username+") connected!");
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  socket.on('updateUserInfo', function(userInfo){
    room = userInfo.location;
    // console.log("sessionID:"+socket.sessionID+", userID:"+socket.userID+", username:"+userInfo.username+", location:"+room+", x:"+userInfo.x+", y:"+userInfo.y);
    if(USER_INFO_DB[socket.sessionID].location != room){
      if(USER_INFO_DB[socket.sessionID].location != ""){
        socket.leave(USER_INFO_DB[socket.sessionID].location);
      }
      socket.join(room);
      console.log(socket.userID+"("+socket.username+") changed room from "+USER_INFO_DB[socket.sessionID].location+" to "+room);
    }
    USER_INFO_DB[socket.sessionID] = {"userID":socket.userID, "username":userInfo.username, "cursorColor":userInfo.cursorColor, "location":room, x:userInfo.x, y:userInfo.y};
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
      userInfoInRoom[USER_INFO_DB[clientId].userID]={
        "username":USER_INFO_DB[clientId].username,
        "cursorColor":USER_INFO_DB[clientId].cursorColor,
        "location":USER_INFO_DB[clientId].location,
        "x":USER_INFO_DB[clientId].x,
        "y":USER_INFO_DB[clientId].y,
      }
    }
    io.to(room).emit("responseUserInfo",userInfoInRoom);
  });
  
  socket.on('sendMessage', function(request){
    console.log(request.message);
    io.to(room).emit("receiveMessage",{"userID":socket.userID,"username":socket.username,"message":request.message});
  });

  socket.on("disconnect", () => {
    console.log(socket.userID+"("+socket.username+") disconnected!");
    delete USER_INFO_DB[socket.sessionID];
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);