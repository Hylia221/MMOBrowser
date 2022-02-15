const SERVER_ADDR = "https://mmobrowser.tk";
// const SERVER_ADDR = "http://localhost";
const socket = io(SERVER_ADDR, { autoConnect: false, transports: ['websocket', 'polling', 'flashsocket'] });
var username = "";
var cursorColor = "#FFFFFF";
var requestUserInfoIntervalFunc;

function initMMOB() {
  chrome.storage.sync.set({ isConnected: false });
  chrome.storage.sync.set({ isChatWindowShown: true });
  chrome.storage.sync.set({ isChatWindowMinimized: false });
  chrome.storage.sync.set({ chatWindowX: 100 });
  chrome.storage.sync.set({ chatWindowY: 100 });
}

initMMOB();

chrome.runtime.onMessage.addListener(
   function (request, sender, sendResponse) {
    if (request.type == "login") {
      username = request.username;
      cursorColor = request.cursorColor;
      let manifestData = chrome.runtime.getManifest();
      let version = manifestData.version;
      socket.auth = { username };
      socket.connect();
      chrome.storage.sync.set({ isConnected: true });
      chrome.tabs.query({}, tabs => {
        for (let i = 0; i < tabs.length; i++) {
          chrome.tabs.sendMessage(
            tabs[i].id,
            { "type": "login" },
          );
        }
      });
      console.log("login!");
      sendResponse({});
    } else if (request.type == "logout") {
      if (socket.connected) {
        socket.disconnect();
      }
      chrome.storage.sync.set({ isConnected: false });
      chrome.tabs.query({}, tabs => {
        for (let i = 0; i < tabs.length; i++) {
          chrome.tabs.sendMessage(
            tabs[i].id,
            { "type": "logout" },
          );
        }
      });
      console.log("logout!");
      sendResponse({});
    } else if (request.type == "updateUserInfo") {
      if (socket.connected) {
        const deletedParamsUrl = sender.tab.url.replace(/\?.*$/, "");
        const location = decodeURI(deletedParamsUrl);
        const myInfo = {
          "username": username,
          "cursorColor":cursorColor,
          "location": location,
          "title": request.title,
          "x": request.my_x,
          "y": request.my_y,
        }
        socket.emit('updateUserInfo', myInfo);
      }
      sendResponse({});
    } else if (request.type == "sendMessage") {
      if (socket.connected) {
        socket.emit('sendMessage', { "message": request.message });
      }
      sendResponse({});
    }
    return true;
  }
);

socket.on("session", ({ sessionID, userID }) => {
  socket.auth = { sessionID };
  socket.userID = userID;
});

socket.on("responseUserInfo", (USER_INFO) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "updateUserInfo", "myUserID": socket.userID, userInfo: USER_INFO },
    );
  });
});

socket.on("receiveMessage", (response) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { "type": "receiveMessage", "userID": response.userID, "username": response.username, "message": response.message },
    );
  });
});





