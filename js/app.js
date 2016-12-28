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
		switch(color){
			case '#2e3349':
				$("#product-render-image").fadeOut(100, function() {
				  $("#product-render-image").load(function() { $("#product-render-image").fadeIn(100); });
				  $("#product-render-image").attr("src", "images/fabric/blue.png");
				});
			break;
			case '#8b8380':
				$("#product-render-image").fadeOut(100, function() {
				  $("#product-render-image").load(function() { $("#product-render-image").fadeIn(100); });
				  $("#product-render-image").attr("src", "images/fabric/default.png");
				});
			break;
			case '#4d443d':
				$("#product-render-image").fadeOut(100, function() {
				  $("#product-render-image").load(function() { $("#product-render-image").fadeIn(100); });
				  $("#product-render-image").attr("src", "images/fabric/darkbrown.png");
				});
			break;
			case '#3e2e2f':
				$("#product-render-image").fadeOut(100, function() {
				  $("#product-render-image").load(function() { $("#product-render-image").fadeIn(100); });
				  $("#product-render-image").attr("src", "images/fabric/brown.png");
				});
			break;
		}
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

