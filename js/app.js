var app = angular.module('presentationApp', []);
app.controller('mainController', function($scope, $browser) {

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

	myCarousel.carousel({
	  swipe: 30
	});

	$scope.baseURL = window.location.pathname;

	$scope.pickPallete = function(e){
		e.preventDefault();
		var color = $(e.target).data('color');
		alert(color);
	}

	$scope.navigateSlide = function(e){
		e.preventDefault();
		var id = $(e.target).attr('id');
		var newIndex = $(e.target).parent().index();
		myCarousel.carousel( newIndex );
		clearActiveSlides();
		$("#"+id).addClass("itemSelected");
		$("#"+id).prev().addClass("makeVisible");
	}

	myCarousel.bind('slide.bs.carousel', function (e) {
		var id = $(e.relatedTarget).data('target-id');
	    clearActiveSlides();
	    $("#"+id).addClass("itemSelected");
	    $("#"+id).prev().addClass("makeVisible");
	});

	function clearActiveSlides(){

		$(".nav-a").removeClass("itemSelected");
		$(".nav-a").prev().removeClass("makeVisible");
	}
 });

