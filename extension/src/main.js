$('body').append(
  `
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">url</th>
        <th scope="col">x</th>
        <th scope="col">y</th>
      </tr>
    </thead>
    <tbody id="userInfo">
    </tbody>
    <table>
    `
);



$(document).ready(function () {
  chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: -100, my_y: -100 }, function (response) {
    return;
  });
});

$(function () {
  $(window).on('mousemove', function (e) {
    var my_x = e.pageX;
    var my_y = e.pageY;
    chrome.runtime.sendMessage({ type: "updateUserInfo", my_x: my_x, my_y: my_y }, function (response) {
      return;
    });
  });
});

chrome.runtime.onMessage.addListener(
  function (request, sender, callback) {
    if (request.type === "updateUserInfo") {
      // 描写しているがデータが来ないカーソルを消す
      var newIdList = [];
      for (id in request.userInfo) {
        newIdList.push(id);
      }
      $('.mmobplayer').each(function (index, element) {
        var tmp = $(element).attr('id').split("-")
        var showedPlayerId = tmp[tmp.length - 1];
        console.log(showedPlayerId);
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
            "top": ui.y + (request.myId == id ? 20:0),
            "left": ui.x + (request.myId == id ? 20:0),
          });
          // $('#mmobname-box-'+ id).css({
          //   "top": ui.y + (request.myId == id ? 20:0)+30,
          //   "left": ui.x + (request.myId == id ? 20:0),
          // }); 
        } else {
          // 初回描写
          $('body').append('<div id="mmobplayer-'+id+'" class="mmobplayer"></div>');
          $('#mmobplayer-'+id).append('<img src="' + chrome.runtime.getURL("./img/cursor1.gif") + '" id="mmobcursor-' + id + '" class="mmobcursor"/>');
          $('#mmobplayer-'+id).append('<span id="mmobname-box-' + id + '" class="mmobname-box">'+ui.name+'</span>');
          // $('body').append('<img src="' + chrome.runtime.getURL("./img/cursor1.gif") + '" id="mmobcursor-' + id + '" class="mmobcursor" />');
          // $('body').append('<div id="mmobballoon_' + id + '" class="balloon"></div>');
          $('#mmobplayer-' + id).css({
            "position": "absolute",
            "top": ui.y + (request.myId == id ? 20:0),
            "left": ui.x + (request.myId == id ? 20:0),
          });

          $('#mmobcursor-' + id).css({
            "position": "absolute",
            "top":0,
            "left":0
          });

          $('#mmobname-box-'+ id).css({
            "display":"block",
            "position":"absolute",
            "top":25,
            "left":"90%",
            "transform":"translateX(-50%)"            
          });
          
          // $('#mmobcursor-' + id).css({
          //   "position": "absolute",
          //   "top": ui.y + (request.myId == id ? 20:0),
          //   "left": ui.x + (request.myId == id ? 20:0),
          // }); 
          // // $('#mmobballoon_'+ id).show();
        }
      }

      // for testserver
      var userCount = 0;
      // console.log(request.userInfo);
      $("#userInfo tr").remove();
      for (id in request.userInfo) {
        ui = request.userInfo[id];
        userCount++;
        $("#userInfo").append(
          '<tr>'
          + '<th scope="row">' + userCount + '</th>'
          + '<td>' + id + '</td>'
          + '<td>' + ui.name + '</td>'
          + '<td>' + ui.url + '</td>'
          + '<td>' + ui.x + '</td>'
          + '<td>' + ui.y + '</td>'
          + '</tr>'
        );
      }
    }
    // sendResponse({updated: true});
    return;
  }
);

