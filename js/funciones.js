var __jquery = jQuery.noConflict();
__jquery(document).ready(function() {
    onReadyPortal(__jquery)
});

function onReadyPortal(__jquery) {
	 if (__jquery("#principal").length) {
        var videos=[];
        var id;
        var iframe;
        var $ = document.querySelector.bind(document);
           lista();
        }
}

function lista(){
    videos = ['https://www.youtube.com/watch?time_continue=17&v=aKuivabiOns','https://www.youtube.com/watch?v=0AJ0mBp-a-w','https://www.youtube.com/watch?v=LtbyamGepu4'];
    for (var i = 0; i < videos.length; i++) { 
         __jquery("#secundarios").append("<iframe src='"+videos[i]+"'></iframe>");
    }
}

function obtenerIdUrl(name,url) {
    try {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);   
        var results = regex.exec(url);    
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    } catch (excepcion) {
        dispararExcepcion(excepcion, "interna.min.js", "obtenerIdUrl()");
    }
}

var player;
id='C2z3ubSOr7o';
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: 300,
        width: 400,
        videoId: id,
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}




    // autoplay video
function onPlayerReady(event) {
     event.target.playVideo(); 
}

// when video ends
var iden=0;
function onPlayerStateChange(event) {        
    if(event.data === 0) {          
        var x = obtenerIdUrl("v",videos[iden]);
        iden++;
        __jquery("#player").css("display","none"); 
        id='xQfqhGPwacU';
        playVideo('player', id);
    }
}

function onPlayerStateChange1(event) {
    if(event.data === 0) {
        if(videos[iden]==undefined){
            iden = iden-1;
        }          
        var x = obtenerIdUrl("v",videos[iden]);
        iden++;
        __jquery("#player").css("display","none"); 
        __jquery(".principal #player1").remove();    
        id='xQfqhGPwacU';
        playVideo('player', x);
    }
}

function playVideo(container,videoId){
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            window.onYouTubePlayerAPIReady = function() {
            player.loadPlayer(container, videoId);
        }
        } else {
            loadPlayer(container, videoId);
        }
}

function loadPlayer(container,videoId){
    var ht = '<div id="player1"></div>';
    __jquery(".principal").append(ht);

        window.player = new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: videoId,
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange1
        }
    });
}

function agregar() {
    var x = document.getElementById("nuevo").value;
    videos.push(x);
}

