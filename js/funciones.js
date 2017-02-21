var __jquery = jQuery.noConflict();
__jquery(document).ready(function() {
    onReadyPortal(__jquery)
});

function onReadyPortal(__jquery) {
	 if (__jquery("#principal").length) {
        var videos=[];
        var id;
           reproducir();
           lista();
        }
}

function reproducir(){
    __jquery("#ahora").attr('src','https://www.youtube.com/embed/aKuivabiOns?autoplay=1');
     __jquery("#ahora1").attr('data','https://www.youtube.com/embed/aKuivabiOns?autoplay=1');
    if ( __jquery("#ahora").paused){
        alert("d");
    } 
}

function lista(){
    videos = ['https://www.youtube.com/watch?time_continue=17&v=aKuivabiOns','https://www.youtube.com/watch?time_continue=17&v=aKuivabiOns','https://www.youtube.com/watch?time_continue=17&v=aKuivabiOns'];
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
id='aKuivabiOns';
function onYouTubePlayerAPIReady() {
    alert("acxa");
    player = new YT.Player('player', {
        height: '390',
        width: '640',
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
function onPlayerStateChange(event) {        
    if(event.data === 0) {          
        var x = obtenerIdUrl("v",videos[1]);
        id='GaI8dMnauGk';
        onYouTubePlayerAPIReady();
    }
}
