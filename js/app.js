var app = angular.module('presentationApp', []);
app.controller('mainController', function($scope, $browser) {

	$scope.baseURL = window.location.pathname;

	$scope.pickPallete = function(e){
		e.preventDefault();
		var color = $(e.target).data('color');
		alert(color);
	}


 });

$(document).ready(function(){
	var $item = $('.carousel .item');
	var $wHeight = $(window).height();
	var myCarousel = $('#mycarousel');
	var myNav = myCarousel.prev();

	$item.eq(0).addClass('active');
	$item.height($wHeight);
	$item.addClass('full-screen');
	$("#a1").addClass("itemSelected");
	$("#a1").prev().addClass("makeVisible");

	$(window).on('resize', function (){
	  $wHeight = $(window).height();
	  $item.height($wHeight);
	});

	myCarousel.bind('slide.bs.carousel', function (e) {

	    $(".nav-a").removeClass("itemSelected");
	    $(".nav-a").prev().removeClass("makeVisible");

	    switch($(e.relatedTarget).attr('id')){
	    	case "item1":
	    		$("#a1").addClass("itemSelected");
	    		$("#a1").prev().addClass("makeVisible");
	    	break;
	    	case "item2":
	    		$("#a2").addClass("itemSelected");
	    		$("#a2").prev().addClass("makeVisible");
	    	break;
	    	case "item3":
	    		$("#a3").addClass("itemSelected");
	    		$("#a3").prev().addClass("makeVisible");
	    	break;
	    	case "item4":
	    		$("#a4").addClass("itemSelected");
	    		$("#a4").prev().addClass("makeVisible");
	    	break;
	    	case "item5":
	    		$("#a5").addClass("itemSelected");
	    		$("#a5").prev().addClass("makeVisible");
	    	break;
	    	case "item6":
	    		$("#a6").addClass("itemSelected");
	    		$("#a6").prev().addClass("makeVisible");
	    	break;
	    }


	});

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

});



// $('.carousel').carousel({
//   interval: 6000,
//   pause: "false"
// });
