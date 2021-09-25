const mmobChatWindowInnerHTML = `
<ul id="mmob-messages"></ul>
<div id="mmobchat-box" class="mmobchat-box"></div>
<form id="mmob-send-form" onsubmit="return false;">
  <input type="text" id="mmob-my-message" placeholder="メッセージ" required autofocus/>
  <button id="mmob-send-button" type="button">送信</button>
</form>
`
const jsFrame = new JSFrame();
const chatFrame = jsFrame.create({
    title: 'mmob-chat-window',
    title: 'MMOB',
    left: 20, top: 20, width: 320, height: 220,
    movable: true,//マウスで移動可能
    resizable: true,//マウスでリサイズ可能
    html:mmobChatWindowInnerHTML
});

chatFrame.on('#mmob-send-button', 'click', ()=>{
  const myMessage = $("#mmob-my-message").val();
  if(myMessage != null && myMessage != '' ){
    chrome.runtime.sendMessage({ type: "sendMessage", message: myMessage},function (response) {
      return true;
    });
    $("#mmob-my-message").val('');  
  }
});

chrome.storage.sync.get(['isConnected','isChatWindowShown'], function(data) {
  if (data.isConnected && data.isChatWindowShown){
    chatFrame.show();
  }
});

chatFrame.hideFrameComponent('closeButton');
window.addEventListener("keydown", function(event) {
  if(event.ctrlKey&&event.code=="KeyI"){
    chrome.storage.sync.get(['isConnected','isChatWindowShown'], function(data) {
      // if (typeof data.isConnected === 'undefined'||typeof data.isChatWindowShown === 'undefined') {
      //   return;
      // }
      if (data.isConnected){
        if (data.isChatWindowShown){
          chatFrame.hide();
          chrome.storage.sync.set({isChatWindowShown: false});
        }else{
          chatFrame.show();
          chrome.storage.sync.set({isChatWindowShown: true});
        }
      }
    });
  }
}, true);

// エンターキーでメッセージ送信
$("#mmob-my-message").keydown(function(event) {
  if( event.keyCode == 13 ) {
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
    var my_x = e.pageX;
    var my_y = e.pageY;
    chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: my_x, my_y: my_y }, function (response) {
      return true;
    });
  });
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.type === "updateUserInfo") {
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
            "top": ui.y + (request.myUserID == id ? 5:0),
            "left": ui.x + (request.myUserID == id ? 0:0),
          });
        } else {
          // 初回描写
          $('body').append('<div id="mmobplayer-'+id+'" class="mmobplayer"></div>');
          $('#mmobplayer-'+id).append('<img src="' + chrome.runtime.getURL("./img/cursor1.gif") + '" id="mmobcursor-' + id + '" class="mmobcursor"/>');
          $('#mmobplayer-'+id).append('<span id="mmobname-box-' + id + '" class="mmobname-box">'+ui.username+'</span>');
          $('#mmobplayer-'+id).append('<div id="mmobspeech-balloon-' + id + '" class="mmobspeech-balloon"></div>');
          $('#mmobplayer-' + id).css({
            "position": "absolute",
            "top": ui.y + (request.myUserID == id ? -20:0),
            "left": ui.x + (request.myUserID == id ? -20:0),
          });
          $('#mmobcursor-' + id).css({
            "position": "absolute",
            "top":0,
            "left":0
          });
          $('#mmobname-box-'+ id).css({
            "display":"inline",
            "position":"absolute",
            "top":25,
            "left":8,
            "transform":"translateX(-50%)"            
          });
          $('#mmobspeech-balloon-'+ id).css({
            "top":-50,
            "left":0,
            "transform":"translateX(-50%)"            
          });
          if(request.myUserID == id){
            $('#mmobcursor-' + id).hide();
          }
          $('#mmobspeech-balloon-'+ id).hide();
        }
      }
      sendResponse({});
    }else if(request.type == "receiveMessage"){
      const msg = request.username +":"+request.message;
      $("#mmobchat-box").append( msg + "<br/>" );
      $("#mmobchat-box").scrollTop( $("#mmobchat-box")[0].scrollHeight);
      console.log(request.userID);
      $('#mmobspeech-balloon-'+ request.userID).text(request.message);
      $('#mmobspeech-balloon-'+ request.userID).show();
      setTimeout(()=>{
        $('#mmobspeech-balloon-'+ request.userID).hide();
      }, 5000);
      sendResponse({});
    }else if(request.type == "logout"){
      $(".mmobplayer").remove();
      chatFrame.hide();
      chrome.storage.sync.set({isChatWindowShown: false});
      sendResponse({});
    }
    return true;
  });

  
// $('body').append(
//   `
//     <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">id</th>
//         <th scope="col">name</th>
//         <th scope="col">url</th>
//         <th scope="col">x</th>
//         <th scope="col">y</th>
//       </tr>
//     </thead>
//     <tbody id="userInfo">
//     </tbody>
//     <table>
//     `
// );

//       // for testserver
//       var userCount = 0;
//       // console.log(request.userInfo);
//       $("#userInfo tr").remove();
//       for (id in request.userInfo) {
//         ui = request.userInfo[id];
//         userCount++;
//         $("#userInfo").append(
//           '<tr>'
//           + '<th scope="row">' + userCount + '</th>'
//           + '<td>' + id + '</td>'
//           + '<td>' + ui.name + '</td>'
//           + '<td>' + ui.url + '</td>'
//           + '<td>' + ui.x + '</td>'
//           + '<td>' + ui.y + '</td>'
//           + '</tr>'
//         );
//       }