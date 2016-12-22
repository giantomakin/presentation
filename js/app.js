var app = angular.module('presentationApp', []);
var $item = $('.carousel .item');
var $wHeight = $(window).height();
var myCarousel = $('#mycarousel');
var myNav = myCarousel.prev();

$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

myNav.find('li > a').click(function() {
  var id = $(this).attr('id');
  var newIndex = $(this).parent().index();
  myCarousel.carousel( newIndex );

  $(".nav-a").removeClass("itemSelected");
  $(".nav-a").prev().removeClass("makeVisible");

  switch(id){
  	case "a1":
  		$("#a1").addClass("itemSelected");
  		$("#a1").prev().addClass("makeVisible");
  	break;
  	case "a2":
  		$("#a2").addClass("itemSelected");
  		$("#a2").prev().addClass("makeVisible");
  	break;
  	case "a3":
  		$("#a3").addClass("itemSelected");
  		$("#a3").prev().addClass("makeVisible");
  	break;
  	case "a4":
  		$("#a4").addClass("itemSelected");
  		$("#a4").prev().addClass("makeVisible");
  	break;
  	case "a5":
  		$("#a5").addClass("itemSelected");
  		$("#a5").prev().addClass("makeVisible");
  	break;
  	case "a6":
  		$("#a6").addClass("itemSelected");
  		$("#a6").prev().addClass("makeVisible");
  	break;
  }

});


// $("item").hasClass("active") {
//     $(".navbar-nav > li > a").toggle(background-color: "#e97925");
// }

// $('.carousel img').each(function() {
//   var $src = $(this).attr('src');
//   var $color = $(this).attr('data-color');
//   $(this).parent().css({
//     'background-image' : 'url(' + $src + ')',
//     'background-color' : $color,
//     // 'background-size' : 'cover',
//     'height' : '100%',
//     'width' : '100%',
//     'background-repeat' : 'no-repeat'
//   });
//   $(this).remove();
// });

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

// $('.carousel').carousel({
//   interval: 6000,
//   pause: "false"
// });
