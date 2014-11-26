

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=799081623490030&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



   Parse.initialize("EypdoI1hRR9e2CCHlllrB6ZvYYGxjfRmXCQGQQ4q", "w2RfaOy33TNnRWjsjcbyzvmRkmb3k7sPoTSyOwAS");

  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '799081623490030', // Facebook App ID
        status     : true, // Facebook ログインステータス
        cookie     : true, // クッキー
        xfbml      : true,
        version    : 'v2.1'
    });

  // Facebook の SDK を読み込んだ後の処理をここに書く。

function parseLoginUsingFB() {
    console.log("Logging in using Facebook.");

    Parse.FacebookUtils.logIn("email", {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook! User: " + user.id);
                console.log(user);
            } else {
                alert("User logged in through Facebook! User: " + user.id);
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
            FB.logout();
        }
    });
};

FB.getLoginStatus(function (response) {
    if (response.status === "connected") {    // 既にログインしている
        parseLoginUsingFB();
    }
    else if (response.status === "not_authorized") {    // ユーザが許可をしていない場合
        parseLoginUsingFB();
    }
    else {    // それ以外
        // Facebook にログイン
        FB.login(function (loginResponse) {
            if (response.authResponse) {
                parseLoginUsingFB();
            }
            else {
                console.log("User cancelled the Facebook login or did not fully authorize.");
            }
        });
    }
});

};




$(function () {
  //    :
  // 他の処理
  //    :

  // ボタンを選んでくる
  var submitBtn = $("#submit-button");

  // ボタンがあるかチェック
  if (submitBtn.length) {
    submitBtn.click(function () {
      // ボタンを押した時の処理
    });
  }
});

 // テキストボックスの値
var nameField = $("#name");
var name = nameField.val();

var textField = $("email");
var email = textField.val();

var passField = $("password");
var pass = passField.val();

// Select タグの値
var areaSelect = $("#area");
var area = areaSelect.text()

var ageSelect = $("#age");
var age = ageSelect.text()


// ラジオボタンから取得する方法
var radioButton = $("input:radio[name=gender]:checked");
var gender = radioButton.val();     // => "male" と返ってくるので注意！
 input:radio
 [name=gender]
 :checked
 // Parse 上に新しいオブジェクト（テーブル）を作る（型を作るイメージ）
var name = Parse.Object.extend("name");
var name = Parse.Object.extend("email");
var name = Parse.Object.extend("password");
var name = Parse.Object.extend("prefecture");
var name = Parse.Object.extend("age");


 var User = Parse.Object.extend("User");

 // submitBtn は登録ページの送信ボタン
  if (submitBtn.length) {
    submitBtn.click(function () {
      // ボタンを押した時の処理
      var User = Parse.Object.extend("User");
      // ↓ここから下に値を設定＋保存をする
      
    });
  }






var checked = $('#checkbox').prop('checked');   // => checked は true

var checked2 = $('#checkbox2').prop('checked');   // => checked は false

$("loginBtn").click(function () {
    Parse.User.logIn("ユーザ名", "パスワード", {
    success: function(user) {
      window.location.href = 'index2.html';
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
    }
});

});
