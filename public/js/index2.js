// index2.jsß
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=799081623490030&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '799081623490030', // Facebook App ID
        status     : true, // Facebook ログインステータス
        cookie     : true, // クッキー
        xfbml      : true,
        version    : 'v2.1'
    });
Parse.FacebookUtils.logIn("email,user_location,user_birthday", {
        success: function(user) {
            if (!user.existed()) {
              
            } else {
                
            }
            FB.api('/me', function (userInfo) {
              var user = Parse.User.current();

              user.set("email", userInfo.email);
              user.set("name", userInfo.name);
                  // area は Facebook から取ってくる（他には年齢とか名前とかメールとか）

           　  user.save(null, {
                success: function(user) {
                alert("Successfully updated mail.");
                },
                error: function (user, error) {
                   alert("Error: " + error.message);
                }
              });
            });//birthdayとかも同じかんじでやる！
            window.location.replace("index2.html");
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
            FB.logout();
        }
    });
    }
 Parse.initialize("EypdoI1hRR9e2CCHlllrB6ZvYYGxjfRmXCQGQQ4q", "w2RfaOy33TNnRWjsjcbyzvmRkmb3k7sPoTSyOwAS");
$(function(){
  
})