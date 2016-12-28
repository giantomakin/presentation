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
	myCarousel.carousel({
	  swipe: 30
	});
	myCarousel.bind('slide.bs.carousel', function (e) {
		var id = $(e.relatedTarget).data('target-id');
	    $(".nav-a").removeClass("itemSelected");
	    $(".nav-a").prev().removeClass("makeVisible");
	    $("#"+id).addClass("itemSelected");
	    $("#"+id).prev().addClass("makeVisible");
	});
	myNav.find('li > a').click(function() {
	  var id = $(this).attr('id');
	  var newIndex = $(this).parent().index();
	  myCarousel.carousel( newIndex );
	  $(".nav-a").removeClass("itemSelected");
	  $(".nav-a").prev().removeClass("makeVisible");

	  $("#"+id).addClass("itemSelected");
	  $("#"+id).prev().addClass("makeVisible");
	});

});
