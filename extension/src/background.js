// const URL = "http://192.168.10.112:3000";
const URL = "http://localhost:3000";
// const URL = "http://3.19.79.227:3000";
const socket = io(URL, { autoConnect: false, transports: ['websocket', 'polling', 'flashsocket'] });
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
      socket.auth = { username };
      socket.connect();
      requestUserInfoIntervalFunc = setInterval(() => {
        if (socket.connected) {
          socket.emit('requestUserInfo', {});
        }
      }, 50);
      chrome.storage.sync.set({ isConnected: true });
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
      clearInterval(requestUserInfoIntervalFunc);
      console.log("logout!");
      sendResponse({});
    } else if (request.type == "updateUserInfo") {
      if (socket.connected) {
        const deletedParamsUrl = sender.tab.url.replace(/\?.*$/, "");
        const location = SHA256.createHash().update(deletedParamsUrl).digest("hex");;
        const myInfo = {
          "username": username,
          "cursorColor":cursorColor,
          "location": location,
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