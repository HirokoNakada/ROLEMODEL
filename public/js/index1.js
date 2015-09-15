$(function() {
    var currentUser = Parse.User.current(); // Parse ユーザを取得
    if (currentUser) { // ログインしている場合
        console.log("Already logged in. Redirecting to index2.");
        location.replace("index2.html"); // index2.html へ移動
    } else {
        console.log("Not logged in yet.");
    }
    var logo = $('h1.logo');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            logo.addClass('logo-scroll');
        } else {
            logo.removeClass('logo-scroll');
        }
    });
});
window.onload = function() {
    var lat = 26.240362;
    var lng = 127.711596;
    var lat2 = 26.240355;
    var lng2 = 127.711580;
    var map = new GMaps({
        div: "#map",
        lat: lat,
        lng: lng,
        zoom: 10,
        scrollwheel: false,
        scaleControl: false,
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        overviewMapControl: false
    });
    map.addMarker({
        lat: lat,
        lng: lng,
        title: "ROLE MODEL",
        icon: "/img/logoo11.png",
        infoWindow: {
            content: "<h2>タイトル</h2><p><br/>説明文が入ります。</p>"
        }
    });
    var styles = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "saturation": "17"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#66c9f0"
        }, {
            "visibility": "on"
        }]
    }];
    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    })
    map.setStyle("map_style");
};