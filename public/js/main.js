

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
var areaSelect = $("#area");
var area = areaSelect.text()

var ageSelect = $("#age");
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
});



// ラジオボタンから取得する方法
var radioButton = $("input:radio[name=gender]:checked");
var gender = radioButton.val();     // => "male" と返ってくるので注意！



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







//----------------------パララックス----------------------//

jQuery.event.add(window,"load",function(){
 
    //リサイズイベント
    $(window).resize(function(){
        //コンテンツの高さ設定
        hoge.contentHeight();
    });
     
    // 以下、パララックス機能の記述
    hoge.parallax();
 
});
 
var hoge = [];
 
// ウィンドウサイズによってコンテンツの高さを変える
hoge.contentHeight = function(){
    var winHeight = $(window).height();
}
 
// パララックス機能
hoge.parallax = function(){
 
    // アニメーション要素を包括している要素を指定
    var containerDiv = $('#container');
    // アニメーションの変数を宣言
    var container = ScrollTween.container(containerDiv);
 
        // 変数に .add でアニメーションを追加していく
        container.add("#cnt1", function(tween) {
            tween
                        // スクロール値「100」時点で、上にはけた状態で中央（水平）方向に存在している
                        .to(100, tween.styles().topOut().center())
                        // スクロール値「200」から「300」間で、中央（垂直）方向に 200 px の位置でストップする
                        // スクロール値「200」から「300」間の処理（変化）ではないことに注意！！
                        .range(200, 300, tween.styles().middle(200))
                        // スクロール値「400」時点で、右方向にはける
                        .to(400, tween.styles().rightOut());
        });
        container.add("#cnt2", function(tween) {
            tween
                        // スクロール値「200」時点で、下にはけた状態で中央（水平）方向に存在している
                        .to(200, tween.styles().bottomOut().center())
                        // スクロール値「300」から「400」間で、中央（垂直）の位置でストップする
                        .range(300, 400, tween.styles().middle())
                        // スクロール値「500」時点で、左方向にはける
                        .to(500, tween.styles().leftOut());
        });
        container.add("#cnt3", function(tween) {
            tween
                        .to(400, tween.styles().center().middle())
                        // {progress:～}で直接 css をあやつれる
                        .to(400, 0 , { progress: function (tween) { $("#cnt3").css("opacity", 0) } })
                        // opacity 部分は、0 から tween 分がプラスされるイメージ
                        .to(600, 0 , { progress: function (tween) { $("#cnt3").css("opacity", tween) } })
                        .to(800, 0 , { progress: function (tween) { $("#cnt3").css("opacity", 1) } })
                        // opacity 部分は、1 から tween 分がマイナスされるイメージ
                        .to(1000, 0 , { progress: function (tween) { $("#cnt3").css("opacity", 1 - tween) } });
        });
 
        // アンカーリンクをつける
        $('#nav .list:nth-child(2) a').stop().on('click', function(){
            // 引数にはスクロール値が入ります
            container.scrollTo(1000);
            return false;
        });
 
        // ちょっと処理ずらして、アニメーションを再生する
        setTimeout(function(){
            container.play();
        },300);
}
