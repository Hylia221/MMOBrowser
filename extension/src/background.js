const URL = "http://192.168.10.112:3000";
const socket = io(URL,{autoConnect: false, transports: ['websocket', 'polling', 'flashsocket'] });
var username = "";

chrome.storage.sync.get('isConnected', function(data) {
  if (typeof data.isConnected === 'undefined') {
    // console.log("set isConnected = false for the first time.")
    chrome.storage.sync.set({isConnected: false});
  }
});

chrome.storage.sync.get('isChatWindowShown', function(data) {
  if (typeof data.isChatWindowShown === 'undefined') {
    chrome.storage.sync.set({isChatWindowShown: true});
  }
});


chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) { 
      if (request.type == "login"){
        username = request.username;
        socket.auth = { username };
        socket.connect();
        console.log("login!");
        chrome.storage.sync.set({isConnected: true});
        sendResponse({});
      }else if(request.type == "logout"){
        // if (typeof socket.disconnect() === 'undefined') {
        //   socket.disconnect();
        // }
        if(socket.connected){
          socket.disconnect();
        }
        chrome.storage.sync.set({isConnected: false});
        console.log("logout!");
        sendResponse({});
      }else if (request.type == "updateUserInfo"){
        if(socket.connected){
          const hashedUrl = await sha256(sender.tab.url);
          console.log(hashedUrl);
          const myInfo = {
            name:username,
            url:hashedUrl,
            x:request.my_x,
            y:request.my_y,
          }
          socket.emit('updateUserInfo',myInfo);
        }
        sendResponse({});
      }else if (request.type == "sendMessage"){
        if(socket.connected){
          socket.emit('sendMessage',{"message":request.message});
        }
        sendResponse({});
      }
      return true;
    });

setInterval(() => {
  // chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
  //   const hashedUrl = await sha256(tabs[0].url);
  //   socket.emit('requestUserInfo', {url:hashedUrl});
  // });
  if(socket.connected){
    socket.emit('requestUserInfo', {});
  }
}, 50);

socket.on("responseUserInfo", (USER_INFO) => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id, 
      {type:"updateUserInfo", "myId":socket.id, userInfo:USER_INFO},
      );
  });
});

socket.on("receiveMessage", (response) => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id, 
      {"type":"receiveMessage", "id":response.id, "username":response.username, "message":response.message},
      );
  });
});


chrome.windows.onRemoved.addListener(function(windowid) {
  chrome.storage.sync.set({isConnected:false});
 });

//  // On tab updated
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.status == "loading") {
//   } else if (changeInfo.status == "complete") {
//     socket.emit('requestUserInfo', {url:tab.url});
//   }
// });

// // On tab removed
// chrome.tabs.onRemoved.addListener(function(tabId) {
//   socket.emit('requestUserInfo', {url:tabs[0].url});
// });