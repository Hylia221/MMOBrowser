var mouseX = 0;
var mouseY = 0;
var mouseMoved = false;
const chatWindow = createMMOBChatWindow();
loadChatWindow();

var requestUserInfoIntervalFunc = setInterval(function(){
  if(mouseMoved){
    chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: mouseX, my_y: mouseY }, function (response) {
      return true;
    });
    mouseMoved = false;
  }
}, 50);

window.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.code == "KeyI") {
    chrome.storage.sync.get(['isConnected', 'isChatWindowShown'], function (data) {
      if (data.isConnected) {
        if (data.isChatWindowShown) {
          chatWindow.hide();
          chrome.storage.sync.set({ isChatWindowShown: false });
        } else {
          chatWindow.show();
          chrome.storage.sync.set({ isChatWindowShown: true });
        }
      }
    });
  }
}, true);

// エンターキーでメッセージ送信
$("#mmob-my-message").keydown(function (event) {
  if (event.keyCode == 13) {
    $("#mmob-send-button").click();
  }
});

$(document).ready(function () {
  chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: -100, my_y: -100 }, function (response) {
    return true;
  });
});

$(function () {
  $(window).on('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    mouseMoved = true;
  });
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.type === "showChatWindow") {
      chatWindow.show();
      chrome.storage.sync.set({ isChatWindowShown: true });
    } else if (request.type === "updateUserInfo") {
      // 描写しているがデータが来ないカーソルを消す
      var newIdList = [];
      for (id in request.userInfo) {
        newIdList.push(id);
      }
      $('.mmobplayer').each(function (index, element) {
        var tmp = $(element).attr('id').split("-")
        var showedPlayerId = tmp[tmp.length - 1];
        if (!newIdList.includes(showedPlayerId)) {
          $("#mmobplayer-" + showedPlayerId).remove();
        }
      });

      // カーソルを表示・更新する
      for (id in request.userInfo) {
        ui = request.userInfo[id];
        if ($('#mmobplayer-' + id).length) {
          // 更新
          
          $('#mmobplayer-' + id).css({
            "top": request.myUserID == id ? mouseY + 5 : ui.y,
            "left": request.myUserID == id ? mouseX: ui.x,
          });
        } else {
          // 初回描写
          $('body').append('<div id="mmobplayer-' + id + '" class="mmobplayer"></div>');
          $('#mmobplayer-' + id).append('<img src="' + chrome.runtime.getURL("./img/cursor1.gif") + '" id="mmobcursor-' + id + '" class="mmobcursor"/>');
          $('#mmobplayer-' + id).append('<span id="mmobname-box-' + id + '" class="mmobname-box">' + ui.username + '</span>');
          $('#mmobplayer-' + id).append('<div id="mmobspeech-balloon-' + id + '" class="mmobspeech-balloon"></div>');
          $('#mmobplayer-' + id).css({
            "position": "absolute",
            "top": request.myUserID == id ? mouseY + 5 : ui.y,
            "left": request.myUserID == id ? mouseX: ui.x,
          });
          $('#mmobcursor-' + id).css({
            "position": "absolute",
            "top": 0,
            "left": 0
          });
          $('#mmobname-box-' + id).css({
            "display": "inline",
            "position": "absolute",
            "top": 25,
            "left": 8,
            "transform": "translateX(-50%)"
          });
          $('#mmobspeech-balloon-' + id).css({
            "top": -50,
            "left": 0,
            "transform": "translateX(-50%)"
          });
          if (request.myUserID == id) {
            $('#mmobcursor-' + id).hide();
          }
          $('#mmobspeech-balloon-' + id).hide();
        }
      }
      sendResponse({});
    } else if (request.type == "receiveMessage") {
      const msg = request.username + ":" + request.message;
      $("#mmobchat-box").append(msg + "<br/>");
      $("#mmobchat-box").scrollTop($("#mmobchat-box")[0].scrollHeight);
      console.log(request.userID);
      $('#mmobspeech-balloon-' + request.userID).text(request.message);
      $('#mmobspeech-balloon-' + request.userID).show();
      setTimeout(() => {
        $('#mmobspeech-balloon-' + request.userID).hide();
      }, 5000);
      sendResponse({});
    } else if (request.type == "logout") {
      $(".mmobplayer").remove();
      chatWindow.hide();
      chrome.storage.sync.set({ isChatWindowShown: false });
      sendResponse({});
    }
    return true;
  });

function createMMOBChatWindow() {
  const mmobChatWindowInnerHTML = `
    <ul id="mmob-messages"></ul>
    <div id="mmobchat-box" class="mmobchat-box"></div>
    <form id="mmob-send-form" onsubmit="return false;">
      <input type="text" id="mmob-my-message" placeholder="メッセージ" required autofocus/>
      <button id="mmob-send-button" type="button">送信</button>
    </form>
    `
  const jsFrame = new JSFrame();
  const appearance = jsFrame.createFrameAppearance();
  const chatWindow = jsFrame.create({
    title: 'mmobchat-window',
    title: 'MMOB',
    left: 20, top: 20, width: 320, height: 220,
    style: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      overflow: 'hidden'
    },
    movable: true,//マウスで移動可能
    resizable: true,//マウスでリサイズ可能
    appearance: mmobChatWindowAppearance(appearance),
    html: mmobChatWindowInnerHTML
  });

  chatWindow.setControl({
    minimizeButton: 'minimizeButton',//Name of the button on framecomponent to minimize when pressed.
    deminimizeButton: 'deminimizeButton',//Name of the button on framecomponent to de-minimize when pressed.
    animation: true,//If true,execute animation during window size changing
    animationDuration: 150,//Duration of animation
  });

  chatWindow.on('hideButton', 'click', (_frame, evt) => {
    chatWindow.hide();
    chrome.storage.sync.set({ isChatWindowShown: false });
  });
  chatWindow.control.on('minimized', (frame, info) => {
    chrome.storage.sync.set({ isChatWindowMinimized: true });
  });
  chatWindow.control.on('deminimized', (frame, info) => {
    chrome.storage.sync.set({ isChatWindowMinimized: false });
  });
  chatWindow.on('#mmob-send-button', 'click', () => {
    const myMessage = $("#mmob-my-message").val();
    if (myMessage != null && myMessage != '') {
      chrome.runtime.sendMessage({ type: "sendMessage", message: myMessage }, function (response) {
        return true;
      });
      $("#mmob-my-message").val('');
    }
  });

  // chatWindow.on('frame', 'move', (data)=>{
  //   chrome.storage.sync.set({ chatWindowX: data.pos });
  //   chrome.storage.sync.set({ chatWindowY: data.pos });
  // });

  return chatWindow;
}

function mmobChatWindowAppearance(apr) {
  apr.onInitialize = function () {
    var partsBuilder = apr.getPartsBuilder();
    var btApr = partsBuilder.buildTextButtonAppearance();
    // 枠線
    btApr.borderWidth = 1;
    btApr.borderColorDefault = '#cccccc';
    btApr.borderColorFocused = '#cccccc';
    btApr.borderColorHovered = '#eeeeee';
    btApr.borderColorPressed = '#eeeeee';
    // 背景
    btApr.backgroundColorDefault = 'white';
    btApr.backgroundColorFocused = 'white';
    btApr.backgroundColorHovered = '#ff3333';
    btApr.backgroundColorPressed = '#ff3333';
    btApr.captionColorDefault = 'black';
    btApr.captionColorFocused = 'black';
    btApr.captionColorHovered = 'black';
    btApr.captionColorPressed = 'black';
    btApr.captionShiftYpx = 1;
    btApr.captionFontRatio = 0.6;

    btApr.caption = '-';
    var minimizeBtEle = partsBuilder.buildTextButton(btApr);

    btApr.caption = '\u25A3';
    var deminimizeBtEle = partsBuilder.buildTextButton(btApr);
    deminimizeBtEle.style.display = 'none';

    btApr.caption = '\u2573';
    var hideBtEle = partsBuilder.buildTextButton(btApr);

    var eleTop = 5 - parseInt(apr.titleBarHeight);
    var eleLeft = -10;
    var eleAlign = 'RIGHT_TOP';
    apr.addFrameComponent('minimizeButton', minimizeBtEle, -20 + eleLeft, eleTop, eleAlign);
    apr.addFrameComponent('deminimizeButton', deminimizeBtEle, -20 + eleLeft, eleTop, eleAlign);
    apr.addFrameComponent('hideButton', hideBtEle, 0 + eleLeft, eleTop, eleAlign);
  };
  return apr;
}
function loadChatWindow(){
  chrome.storage.sync.get(['isConnected', 'isChatWindowShown', 'isChatWindowMinimized', 'chatWindowX', 'chatWindowY'], function (data) {
    if (data.isConnected && data.isChatWindowShown) {
      // console.log(data.chatWindowX);
      // chatWindow.setPosition(data.chatWindowX, data.chatWindowY, 'LEFT_TOP');
      if (data.isChatWindowMinimized) {
        chatWindow.control.doCommand('minimize');
      }
      chatWindow.show();
    }
  });
}