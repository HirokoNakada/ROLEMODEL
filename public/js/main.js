(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
        "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=799081623490030&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
Parse.initialize("EypdoI1hRR9e2CCHlllrB6ZvYYGxjfRmXCQGQQ4q",
    "w2RfaOy33TNnRWjsjcbyzvmRkmb3k7sPoTSyOwAS");

function parseLoginUsingFB() {
    console.log("Logging in using Facebook.");
    Parse.FacebookUtils.logIn("email,user_location,user_birthday", {
        success: function(user) {
            if (!user.existed()) {} else {}
            FB.api('/me', function(userInfo) {
                var user = Parse.User.current();
                user.set("email", userInfo.email);
                user.set("username", userInfo.name);
                // area は Facebook から取ってくる（他には年齢とか名前とかメールとか）
                　
                user.save(null, {
                    success: function(user) {
                    
                         window.location.replace("index2.html");
                    },
                    error: function(user, error) {
                        
                    }
                });
            }); //birthdayとかも同じかんじでやる！
        },
        error: function(user, error) {
         
            FB.logout();
        }
    });
};

function loginfacebook() {
    FB.getLoginStatus(function(response) {
        if (response.status === "connected") { // 既にログインしている
            parseLoginUsingFB();
        } else if (response.status === "not_authorized") { // ユーザが許可をしていない場合
            parseLoginUsingFB();
        } else { // それ以外
            // Facebook にログイン
            FB.login(function(loginResponse) {
      　　　　　　　if (loginResponse.authResponse) {
                    parseLoginUsingFB();
                } else {
                    console.log(
                        "User cancelled the Facebook login or did not fully authorize."
                    );
                }
            });
        }
    });
}
window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId: '799081623490030', // Facebook App ID
        status: true, // Facebook ログインステータス
        cookie: true, // クッキー
        xfbml: true,
        version: 'v2.1'
    });
    // Facebook の SDK を読み込んだ後の処理をここに書く。
};
$(function() {
    //    :
    // 他の処理
    //    :
    // ボタンを選んでくる
    var submitBtn = $("#tourokuBtn");
    // ボタンがあるかチェック
    if (submitBtn.length) {
        submitBtn.click(function() {
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
                    messageField.text(
                        "ご登録ありがとうございます。");
                    window.location.replace(
                        "index2.html");
                },
                error: function(user, error) {
                 
                }
            });
        });
    }
    $("#loginBtn").click(function() {
        var textField = $("#loginemail");
        var email = textField.val();
        var passField = $("#loginpassword");
        var password = passField.val();
        Parse.User.logIn(email, password, {
            success: function(user) {
                window.location.href =
                    'index2.html';
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
            }
        });
    });

    $("#logoutBtn").click(function () {
      Parse.User.logOut();
      window.location.href = 'index.html';
    });

    // ここから下にログアウト後の処理を書く。
    $("#sendemail_btn").click(function() {
        var emailField = $("#sendemail");
        var email = emailField.val();
        var params = {
            "email": email
        };
        Parse.Cloud.run("sendemail", params, {
            success: function(result) {
                // Parse Object の派生クラスを作る。
                var Subscriber = Parse.Object.extend(
                    "Subscriber");
                // インスタンスを作る
                var subs = new Subscriber();
                // 情報を設定する
                subs.set("email", email);
                // 保存する
                subs.save();
                // 成功した場合の処理
               
            },
            error: function(error) {
                // エラーした場合の処理
            }
        });
    });

    $("#fbtouroku").click(function() {
        loginfacebook();
   
    });

     $("#fblogin").click(function() {
        loginfacebook();
   
    });
    $('#div-modal2').on('show.bs.modal', function (event) {      // div-modal2 の ダイアログをだしたときに
        var clickedObject = $(event.relatedTarget);    // クリックされたタグ（<a> タグ）
        var person = clickedObject.data("person");   // の data-person の値を取ってくる

        console.log("Setting hidden value to " + person);
    $("#person").val(person);       // <input type="hidden" id="person"> に値を追加する
});

    $("#QuestionBtn").click(function() {
        console.log("question")
            // Simple syntax to create a new subclass of Parse.Object.
        var Question = Parse.Object.extend("Question");
        // Create a new instance of that class.
        var question = new Question();
        var val = $(':text[name="my-text"]').val();
        console.log(val);
    
        question.set("text", val);

        // 今ログインしているユーザの取得
        var user = Parse.User.current();

        // ユーザ名が変数 name に入る
        var name = user.getUsername();

        question.set("name",name);

        var person = $("#person").val();
        question.set("person", person);

        question.save(null, {
            success: function(question) {
                // Execute any logic that should take place after the object is saved.

                $("#div-modal2").modal('hide');
            },
            error: function(question, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
            
            }
        }); // => "This is text."
         
           
    });
  var currentUser = Parse.User.current();

if (currentUser) {
    var welcome = $("#welcome");    // welcome と付いているタグを抽出

    if (welcome.length) {    // welcome のタグがある場合だけ
        welcome.text(currentUser.getUsername());   // Parse にあるユーザ名を表示する
    }
}
});



  $("#div-modal2").on("shown.bs.modal", function ( e ) {
        // ダイアログが表示された時の動作をここに書きます。
    });


$(function(){
    $('.btns').click(function(){
        wn = '.' + $(this).data('tgt');
        var mW = $(wn).find('.modalBody').innerWidth() / 2;
        var mH = $(wn).find('.modalBody').innerHeight() / 2;
        $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
        $(wn).fadeIn(500);
    });
    $('.close,.modalBK').click(function(){
        $(wn).fadeOut(500);
    });
});



