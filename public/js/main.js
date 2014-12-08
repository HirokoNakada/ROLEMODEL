

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=799081623490030&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



   Parse.initialize("EypdoI1hRR9e2CCHlllrB6ZvYYGxjfRmXCQGQQ4q", "w2RfaOy33TNnRWjsjcbyzvmRkmb3k7sPoTSyOwAS");
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
function loginfacebook(){
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
}
  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '799081623490030', // Facebook App ID
        status     : true, // Facebook ログインステータス
        cookie     : true, // クッキー
        xfbml      : true,
        version    : 'v2.1'
    });

  // Facebook の SDK を読み込んだ後の処理をここに書く。


};




$(function () {
  //    :
  // 他の処理
  //    :

  // ボタンを選んでくる
var submitBtn = $("#tourokuBtn");

  // ボタンがあるかチェック
  if (submitBtn.length) {
    submitBtn.click(function () {
       // テキストボックスの値
var nameField = $("#name");
var name = nameField.val();

var textField = $("#email");
var email = textField.val();

var passField = $("#password");
var password = passField.val();

// Select タグの値
var areaSelect = $("#area option:selected");
var area = areaSelect.text()

var ageSelect = $("#age option:selected");
var age = ageSelect.text()

 var User = Parse.Object.extend("User");
 var user = new Parse.User();
user.set("username", name);
user.set("email", email);
user.set("password", password);
user.set("area", area);
user.set("age", age);



user.signUp(null, {
  success: function(user) {
   var messageField = $("#message");
messageField.text("ご登録ありがとうございます。");
window.location.replace("index2.html");
  },
  error: function(user, error) {
    alert("Error: " + error.code + " " + error.message);
  }


});

    });
  }

  $("#loginBtn").click(function () {

    var textField = $("#loginemail");
    var email = textField.val();

    var passField = $("#loginpassword");
    var password = passField.val();

    Parse.User.logIn(email,password, {
      success: function(user) {
        window.location.href = 'index2.html';
      },
      error: function(user, error) {
      // The login failed. Check error to see why.
      }
    });

  });

  $("#sendemail_btn").click(function (){

    var emailField = $("#sendemail");
    var email = emailField.val();

    var params = { "email": email };

    Parse.Cloud.run("sendemail", params, {
      success: function(result) {
        // Parse Object の派生クラスを作る。
        var Subscriber = Parse.Object.extend("Subscriber");

        // インスタンスを作る
        var subs = new Subscriber();

        // 情報を設定する
        subs.set("email", email);

        // 保存する
        subs.save();
        // 成功した場合の処理
        // result には 'Hello Daisuke Shimamoto!' って入ってるはず。
        alert("購読しました。");
        console.log(result);
      },
      error: function(error) {
        // エラーした場合の処理
      }
    });


  });
  $("#fbtouroku").click(function(){
   loginfacebook();

  });
});




