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

$(function() {
	$(window).on('mousemove', function(e) {
    var my_x = e.pageX;
    var my_y = e.pageY;
    chrome.runtime.sendMessage({type:"mouseMoved", my_x:my_x, my_y:my_y}, function(response) {
      return;
    });
	});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {
    if (request.type === "updateUserInfo") {
      // 描写しているがデータが来ないカーソルを消す
      var newIdList=[];
      for(id in request.userInfo){
        newIdList.push(id);
      }
      $('.mmobcursor').each(function(index, element){
        var tmp = $(element).attr('id').split("_")
        var showedCursorId = tmp[tmp.length - 1];
        if(!newIdList.includes(showedCursorId)){
          $("#mmobcursor_"+showedCursorId).remove();
        }
      });

      // カーソルを表示・更新する
        for(id in request.userInfo){
        ui = request.userInfo[id];
        if($('#mmobcursor_'+id).length){
          $('#mmobcursor_'+id).css({
            "top":ui.y + 20,
            "left":ui.x + 20,
          });
        }else{
          $('body').append('<img src="'+chrome.runtime.getURL("./img/mmob_icon_old.png")+'" id="mmobcursor_'+id+'" class="mmobcursor">');
          $('#mmobcursor_'+id).css({
            "position": "absolute",
            "top":ui.y + 20,
            "left":ui.x + 20,
          });
        }
      }

      // for testserver
      var userCount = 0;
      // console.log(request.userInfo);
      $("#userInfo tr").remove();
      for(id in request.userInfo){
        ui = request.userInfo[id];
        userCount++;
        $("#userInfo").append(
          '<tr>'
          +'<th scope="row">'+userCount+'</th>'
          +'<td>'+id+'</td>'
          +'<td>'+ui.name+'</td>'
          +'<td>'+ui.url+'</td>'
          +'<td>'+ui.x+'</td>'
          +'<td>'+ui.y+'</td>'
          +'</tr>'
          );
      }
    }
    // sendResponse({updated: true});
    return;
  }
);

