

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=799081623490030&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.3.1.min.js"></script>
  <script type="text/javascript">
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



(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  

