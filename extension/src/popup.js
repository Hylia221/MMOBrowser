const USERNAME_MAXLENGTH = 16;

chrome.storage.sync.get('isConnected', function (data) {
    if (typeof data.isConnected === 'undefined') {
        console.log("isConnected undefined");
    } else {
        console.log("isConnected:" + data.isConnected);
        if (data.isConnected) {
            showMainWindow();
        } else {
            viewLoginWindow();
        }
    }
    console.log(data.isConnected);
});

function viewLoginWindow() {
    $("#loginWindow").append(`
    <img src="../img/mmob_icon.png">
    <h2>MMOBrowser</h2>
    <form class="mx-auto" id="loginform">
    <div class="form-group w-75 mt-5 mx-auto">
           <input class="form-control" id="username"
               type="text" name="username" placeholder="ユーザ名（16文字以内）" 
               required autofocus/>
    </div>
    <div class="form-group form-check">
        <label>
            <input type="color" id="my-cursor-color" value="#FFFFFF">
            カーソルの色を選択
        </label>
        </div>
    <button type="button" id="loginButton" class="btn btn-primary w-75" disabled>ログイン</button>
    </form>
    <p>現在の接続者数：<span class="mmob-connections">ロード中...</span></p>
    `);

    getConnections();
    $('#loginButton').on('click', function () {
        var username = $("#username").val();
        var myCursorColor = $("#my-cursor-color").val();
        console.log(myCursorColor);
        chrome.runtime.sendMessage({ type: "login", username: username, cursorColor:myCursorColor}, function (response) {
            chrome.storage.sync.get('isConnected', function (data) {
                console.log(data.isConnected);
                if (data.isConnected) {
                    console.log("login successed!")
                    hideLoginWindow();
                    showMainWindow();
                    showChatWindow();
                    showWorldInfoWindow();
                } else {
                    // ログイン失敗メッセージ
                    console.log("login failed.")
                }
            });
        });
    });

    // ユーザ名の文字数制限
    $('#username').on('input', function(){
        var cnt = $(this).val().length;
        if(cnt > 0 && USERNAME_MAXLENGTH > cnt){
            $('#loginButton').prop('disabled', false);
        }else{
            $('#loginButton').prop('disabled', true);
        }
    });

    // エンターキーでログイン
    $("#username").keydown(function (event) {
        if (event.keyCode == 13) {
            var cnt = $('#username').val().length;
            if(cnt > 0 && cnt < USERNAME_MAXLENGTH){
                $("#loginButton").click();
            }
        }
    });
}

function hideLoginWindow() {
    $("#loginWindow").empty();
}

function showMainWindow() {
    $("#mainWindow").append(`
    <p>現在の接続者数：<span class="mmob-connections">ロード中...</span></p>
    <form class="w-60 mx-auto" id="logoutform">
        <button type="button" id="showChatWindowButton" class="btn btn-primary my-1">チャットを表示</button>
        <button type="button" id="showWorldInfoWindowButton" class="btn btn-primary my-1">ワールド情報を表示</button>
        <button type="button" id="logoutButton" class="btn btn-primary my-1">ログアウト</button>
    </form>
    `);
    getConnections();
    $('#showChatWindowButton').on('click', function () {
        showChatWindow();
    });
    $('#showWorldInfoWindowButton').on('click', function () {
        showWorldInfoWindow();
    });
    $('#logoutButton').on('click', function () {
        chrome.runtime.sendMessage({ type: "logout" }, function (response) {
            chrome.storage.sync.get('isConnected', function (data) {
                if (data.isConnected) {
                    // ログアウト失敗メッセージ
                    console.log("logout failed.")
                } else {
                    hideMainWindow();
                    viewLoginWindow();
                }
            });
        });
    });
}

function hideMainWindow() {
    $("#mainWindow").empty();
}

function showChatWindow() {
    chrome.tabs.query({}, tabs => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(
                tabs[i].id,
                { "type": "showChatWindow" },
            );
        }
    });
}

function showWorldInfoWindow() {
    chrome.tabs.query({}, tabs => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(
                tabs[i].id,
                { "type": "showWorldInfoWindow" },
            );
        }
    });
}

function getConnections(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/connections', true);
    request.responseType = 'json';
    request.onload = function () {
      var data = this.response;
      console.log(data.connections);
      $(".mmob-connections").text(data.connections);
    };
    request.send();
}

setInterval(getConnections,5000);