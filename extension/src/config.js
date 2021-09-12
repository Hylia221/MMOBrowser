chrome.storage.sync.get('isConnected', function(data) {
    if (typeof data.isConnected === 'undefined') {
        console.log("isConnected undefined");
    } else {
        console.log("isConnected:"+data.isConnected);
        if (data.isConnected){
            showMainWindow();
        }else{
            viewLoginWindow();
        }
    }
    console.log(data.isConnected);
});

function viewLoginWindow(){
    $("#loginWindow").append(`
    <img src="../img/mmob_icon.png">
    <h2>MMOBrowser</h2>
    <form class="mx-auto" id="loginform">
    <div class="form-group w-75 mt-5 mx-auto">
           <input class="form-control" id="username"
               type="text" name="username" placeholder="ユーザ名" 
               required autofocus/>
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="autologin">
        <label class="form-check-label" for="autologin">次回から自動的にログインする</label>
    </div>
    <button type="button" id="loginButton" class="btn btn-outline-primary w-75">ログイン</button>
    </form>
    `);

    $('#loginButton').on('click', function() {
        var username = $("#username").val();
        chrome.runtime.sendMessage({type:"login", username:username}, function(response) {
            chrome.storage.sync.get('isConnected', function(data) {
                console.log(data.isConnected);
                if(data.isConnected){
                    console.log("login successed!")
                    hideLoginWindow();
                    showMainWindow();
                }else{
                    // ログイン失敗メッセージ
                    console.log("login failed.")
                }
            });
        });
    });
    
}

function hideLoginWindow(){
    $("#loginWindow").empty();
}

function showMainWindow(){
    $("#mainWindow").append(`
    <form class="w-60 mx-auto" id="loginform">
        <button type="button" id="logoutButton" class="btn btn-outline-primary my-1">ログアウト</button>
    </form>
    `); 
    $('#logoutButton').on('click', function() {
        console.log("click logoutButton")
        chrome.runtime.sendMessage({type:"logout"}, function(response) {
            chrome.storage.sync.get('isConnected', function(data) {
                if(data.isConnected){
                    // ログアウト失敗メッセージ
                    console.log("logout failed.")
                }else{
                    hideMainWindow();
                    viewLoginWindow();
                }
            });
        });
    });    
}

function hideMainWindow(){
    $("#mainWindow").empty();
}
