const URL = "http://192.168.10.112:3000";
const socket = io(URL,{autoConnect: false, transports: ['websocket', 'polling', 'flashsocket'] });
var username = "";
var requestUserInfoIntervalFunc;

function initMMOB(){
  chrome.storage.sync.set({isConnected: false});
  chrome.storage.sync.set({isChatWindowShown: true});
  // chrome.storage.sync.get('isConnected', function(data) {
  //   if (typeof data.isConnected === 'undefined') {
  //     // console.log("set isConnected = false for the first time.")
  //     chrome.storage.sync.set({isConnected: false});
  //   }
  // });
  // chrome.storage.sync.get('isChatWindowShown', function(data) {
  //   if (typeof data.isChatWindowShown === 'undefined') {
  //     chrome.storage.sync.set({isChatWindowShown: true});
  //   }
  // });
}

initMMOB();

chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) { 
      if (request.type == "login"){
        username = request.username;
        socket.auth = { username };
        socket.connect();
        requestUserInfoIntervalFunc = setInterval(() => {
          if(socket.connected){
            socket.emit('requestUserInfo', {});
          }
        }, 50);
        chrome.storage.sync.set({isConnected: true});
        console.log("login!");
        sendResponse({});
      }else if(request.type == "logout"){
        if(socket.connected){
          socket.disconnect();
        }
        chrome.storage.sync.set({isConnected: false});
        chrome.tabs.query({}, tabs => {
          for(let i=0; i<tabs.length; i++){
            chrome.tabs.sendMessage(
              tabs[i].id, 
              {"type":"logout"},
            );
          }
        });
        clearInterval(requestUserInfoIntervalFunc);
        console.log("logout!");
        sendResponse({});
      }else if (request.type == "updateUserInfo"){
        if(socket.connected){
          const deletedParamsUrl = sender.tab.url.replace(/\?.*$/,"");
          const location = await sha256(deletedParamsUrl);
          const myInfo = {
            "username":username,
            "location":location,
            "x":request.my_x,
            "y":request.my_y,
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
    }
);

socket.on("session", ({ sessionID, userID }) => {
  socket.auth = { sessionID };
  // localStorage.setItem("sessionID", sessionID);
  socket.userID = userID;
});

socket.on("responseUserInfo", (USER_INFO) => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id, 
      {type:"updateUserInfo", "myUserID":socket.userID, userInfo:USER_INFO},
      );
  });
});

socket.on("receiveMessage", (response) => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id, 
      {"type":"receiveMessage", "userID":response.userID, "username":response.username, "message":response.message},
      );
  });
});

// chrome.windows.onRemoved.addListener(function(windowid) {
//   chrome.storage.sync.set({isConnected:false});
//  });

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