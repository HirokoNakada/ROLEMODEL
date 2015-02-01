$(function () {
    var currentUser = Parse.User.current();    // Parse ユーザを取得

    if (currentUser) {    // ログインしている場合
        console.log("Already logged in. Redirecting to index2.");
        location.replace("index2.html");    // index2.html へ移動
    } else {
        console.log("Not logged in yet.");
    }
});