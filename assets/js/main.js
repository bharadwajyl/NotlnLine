//On window scroll
window.onscroll = function() {
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? 
    $("nav").css("box-shadow", "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px") :
    $("nav").css("box-shadow", "none");
};


//Overlay
function overlay(){
    $(".overlay").length > 0 ? $(".overlay").remove() : $("body").append('<div class="overlay" onclick="overlay()"></div>');
    if ($("nav ul").css("right") >= "0px"){ $("nav ul").css("right","-100%"); }
}


//Onresize reload
$(window).on("resize", function(){
    setTimeout(function(){ window.location.reload(); });
});
