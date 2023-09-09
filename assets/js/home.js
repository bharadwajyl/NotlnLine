//Global variables
var max_width = window.innerWidth;

//Jquery Sliders
if (max_width <= 1200 && max_width >= 721) {
    $('.scroller').slick({ slidesToShow: 3, slidesToScroll: 1, dots: false, arrows: true, autoplay: true, autoplaySpeed: 2000, infinite: true });
} else if (max_width <= 720 && max_width >= 500) {
    $('.scroller').slick({ slidesToShow: 2, slidesToScroll: 1, dots: false, arrows: false, autoplay: true, autoplaySpeed: 2000, infinite: true });
} else if (max_width <= 499) {
    $('.scroller').slick({ slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false, autoplay: true, autoplaySpeed: 2000, infinite: true });
    
} else {
    $('.scroller').slick({ slidesToShow: 4, slidesToScroll: 1, dots: false, arrows: true, autoplay: true, autoplaySpeed: 2000, infinite: true });
}


//Accordion
$(".card span").on("click", function(){
    $(this).next("p").toggle("slow");
    $(this).children(".marker").css("rotate") == "none" || $(this).children(".marker").css("rotate") == "0deg" ? $(this).children(".marker").css("rotate","180deg") : $(this).children(".marker").css("rotate","0deg");
});

if (max_width <= 920){
    $('<h1 class="title rep_title big"><em>Best in class</em> lab tests!</h1>').insertBefore("header form");
    $('<a href="#" class="ham"><i class="fa fa-bars"></i></a>').insertAfter("nav figure");
    $('<i class="fa fa-caret-down marker"></i>').appendTo(".card span");
} else {
    if ($(".rep_title").length > 0) { $(".rep_title").remove(); }
    if ($(".ham").length > 0) { $(".ham").remove(); }
    if ($(".marker").length > 0) { $(".marker").remove(); }
}


//Responsive Nav
$(".ham").on("click", function(){
    if ($("nav ul").css("right") < "0px"){
        $("nav ul").css("right","0px");
    } else {
        $("nav ul").css("right","-100%");
    }
    overlay();
});


//Data Count
var a = 0;
$(window).scroll(function() {
  var oTop = $('.division_2').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.division_2 section h3 b').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({ countNum: countTo },
        { duration: 2000, easing: 'swing', step: function() { $this.text(Math.floor(this.countNum)); },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }
});
