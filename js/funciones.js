var __jquery = jQuery.noConflict();
__jquery(document).ready(function() {
    onReadyPortal(__jquery)
});

function onReadyPortal(__jquery) {
	 if (__jquery("#principal").length) {
           reproducir();
           lista();
        }
}

function reproducir(){
    __jquery("#ahora").attr('src','https://www.youtube.com/embed/aKuivabiOns?autoplay=1');
    if ( __jquery("#ahora").paused){
        alert("d");
    } 
}

function lista(){
    var videos = ['https://www.youtube.com/embed/adBxyO1H73M','https://www.youtube.com/embed/adBxyO1H73M','https://www.youtube.com/embed/adBxyO1H73M'];
    alert(videos.length)
    for (var i = 0; i < videos.length; i++) { 
         __jquery("#secundarios").append("<iframe src='"+videos[i]+"'></iframe>");
    }
}
