const MESSAGE_MAX_LENGTH = 50;
var mouseX = 0;
var mouseY = 0;
var mouseMoved = false;
const chatWindow = createMMOBChatWindow();
loadChatWindow();

// 自カーソル位置の送信
var requestUserInfoIntervalFunc = setInterval(function(){
  if(mouseMoved){
    chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: mouseX, my_y: mouseY }, function (response) {
      return true;
    });
    mouseMoved = false;
  }
}, 16);

// 初回更新
$(document).ready(function () {
  chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: -100, my_y: -100 }, function (response) {
    return true;
  });
});

// カーソル位置情報の保存
$(function () {
  $(window).on('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    mouseMoved = true;
  });
});

// リスナーイベントの実行
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.type === "showChatWindow") {
      // チャットウィンドウを表示する
      chatWindow.show();
      chrome.storage.sync.set({ isChatWindowShown: true });
    } else if (request.type === "updateUserInfo") {
      // データが来ないカーソルを消す
      var newIdList = [];
      for (id in request.userInfo) {
        newIdList.push(escapeHTML(id));
      }
      $('.mmobplayer').each(function (index, element) {
        var tmp = $(element).attr('id').split("-")
        var showedPlayerId = tmp[tmp.length - 1];
        if (!newIdList.includes(showedPlayerId)) {
          $("#mmobplayer-" + showedPlayerId).remove();
        }
      });

      // カーソルを表示・更新する
      for (var id_tmp in request.userInfo) {
        var ui = request.userInfo[id_tmp];
        var id = escapeHTML(id_tmp);
        var myUserID = escapeHTML(request.myUserID);
        var username = escapeHTML(ui.username);
        var cursorColor = escapeHTML(ui.cursorColor);
        var x = ui.x;
        var y = ui.y;
        if ($('#mmobplayer-' + id).length) {
          // 更新
          $('#mmobplayer-' + id).css({
            "top": myUserID == id ? mouseY + 5 : y,
            "left": myUserID == id ? mouseX: x,
          });
        } else {
          // 初回描写
          $('body').append('<div id="mmobplayer-' + id + '" class="mmobplayer"></div>');
          // $('#mmobplayer-' + id).append('<img src="' + chrome.runtime.getURL("./img/cursor1.gif") + '" id="mmobcursor-' + id + '" class="mmobcursor"/>');
          $('#mmobplayer-' + id).append('<svg id="mmobcursor-' + id + `" class="mmobcursor" version="1.0" xmlns="http://www.w3.org/2000/svg" width="82" height="130" viewBox="0 108 82 128">
          <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
          <g transform="translate(0.0,128.0) scale(0.00150,-0.00150) " 
          fill="`+cursorColor+`" stroke="black" stroke-width="500">
          <path d="M0 7623 l1 -5178 1207 1213 1207 1213 1254 -2435 1254 -2436 1199 0
          c659 0 1198 2 1198 5 0 3 -18 38 -39 78 -21 40 -127 241 -234 447 -173 333
          -1696 3258 -2281 4379 -121 234 -222 429 -224 433 -2 4 827 8 1842 8 l1846 0
          0 70 0 69 -923 833 c-507 459 -2015 1821 -3352 3028 -1337 1207 -2743 2477
          -3125 2822 l-695 628 -67 0 -68 0 0 -5177z"/>
          </g></svg>
          `);
          $('#mmobplayer-' + id).append('<div id="mmobname-box-' + id + '" class="mmobname-box">' + username + '</div>');
          $('#mmobplayer-' + id).append('<div id="mmobspeech-balloon-' + id + '" class="mmobspeech-balloon"></div>');
          $('#mmobplayer-' + id).css({
            "position": "absolute",
            "top": myUserID == id ? mouseY + 5 : y,
            "left": myUserID == id ? mouseX: x,
          });
          $('#mmobcursor-' + id).css({
            "position": "absolute",
            "top": 0,
            "left": 0
          });
          $('#mmobname-box-' + id).css({
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
          if (myUserID == id) {
            $('#mmobcursor-' + id).hide();
          }
          $('#mmobspeech-balloon-' + id).hide();
        }
      }
      sendResponse({});
    } else if (request.type == "receiveMessage") {
      // メッセージの受信
      var userID = escapeHTML(request.userID);
      var username = escapeHTML(request.username);
      var message = escapeHTML(request.message);
      const msg = username + ":" + message;
      $("#mmobchat-box").append(msg + "<br/>");
      $("#mmobchat-box").scrollTop($("#mmobchat-box")[0].scrollHeight);
      $('#mmobspeech-balloon-' + userID).html(message);
      $('#mmobspeech-balloon-' + userID).show();
      setTimeout(() => {
        $('#mmobspeech-balloon-' + userID).hide();
      }, 5000);
      sendResponse({});
    } else if (request.type == "logout") {
      // ログアウト処理
      $(".mmobplayer").remove();
      chatWindow.hide();
      chrome.storage.sync.set({ isChatWindowShown: false });
      sendResponse({});
    }
    return true;
  });

// チャットウインドウの表示(キーボードショットカット)
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
    var cnt = $('#mmob-my-message').val().length;
    if(cnt > 0 && cnt < MESSAGE_MAX_LENGTH){
      $("#mmob-send-button").click();
    }
  }
});

// チャットウィンドウの生成
function createMMOBChatWindow() {
  const mmobChatWindowInnerHTML = `
    <ul id="mmob-messages"></ul>
    <div id="mmobchat-box" class="mmobchat-box"></div>
    <form id="mmob-send-form" onsubmit="return false;">
      <input type="text" id="mmob-my-message" placeholder="メッセージ（50文字以内）" autofocus/>
      <button id="mmob-send-button" type="button" disabled>送信</button>
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
  // メッセージの送信
  chatWindow.on('#mmob-send-button', 'click', () => {
    const myMessage = $("#mmob-my-message").val();
    if (myMessage != null && myMessage != '') {
      chrome.runtime.sendMessage({ type: "sendMessage", message: myMessage }, function (response) {
        return true;
      });
      $("#mmob-my-message").val('');
    }
  });
  // ユーザ名の文字数制限
  chatWindow.on('#mmob-my-message', 'input', () => {
    // $('#mmob-my-message').on('input', function(){
    var cnt = $('#mmob-my-message').val().length;
    if(cnt > 0 && cnt < MESSAGE_MAX_LENGTH){
        $('#mmob-send-button').prop('disabled', false);
    }else{
        $('#mmob-send-button').prop('disabled', true);
    }
  });
  // chatWindow.on('frame', 'move', (data)=>{
  //   chrome.storage.sync.set({ chatWindowX: data.pos });
  //   chrome.storage.sync.set({ chatWindowY: data.pos });
  // });

  return chatWindow;
}

// チャットウィンドウの書式
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

// チャットウィンドウの初期状態ロード
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

function escapeHTML(string){
  return string.replace(/&/g, '&lt;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, "&#x27;");
}