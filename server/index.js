const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

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
  var url =   socket.url;
  console.log(username+"("+socket.id+") connected from "+url);
  USER_INFO_DB[socket.id] = {name:username, url:url, x:0, y:0};
  
  socket.on('mouseMoved', function(userInfo){
    console.log("id:"+socket.id+", name:"+userInfo.name+", url:"+userInfo.url+", x:"+userInfo.x+", y:"+userInfo.y);
    USER_INFO_DB[socket.id] = {name:userInfo.name, url:userInfo.url, x:userInfo.x, y:userInfo.y};
  }); 

  socket.on('requestUserInfo', function(url){
    socket.emit("responseUserInfo",USER_INFO_DB);
  });
  
  socket.on("disconnect", () => {
    console.log(username+"("+socket.id+") disconnected!");
    delete USER_INFO_DB[socket.id];
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);