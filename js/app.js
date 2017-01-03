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

	$scope.baseURL = window.location.pathname;

	$scope.pickPallete = function(e){
		e.preventDefault();
		var color = $(e.target).data('color');
		console.log(color);
		switch(color){
			case '#2f3349':
				renderColors("blue");
			break;
			case '#eae9e5':
				renderColors("white");
			break;
			case '#7a736d':
				renderColors("gray");
			break;
			case '#572828':
				renderColors("brown");
			break;
			case 1:
				staticColors("B");
			break;
			case 2:
				staticColors("W");
			break;
			case 3:
				staticColors("G");
			break;
			case 4:
				staticColors("R");
			break;
			case 5:
				switchVisualizer('assets/fabric/blue/');
			break;
			case 6:
				switchVisualizer('assets/fabric/white/');
			break;
			case 7:
				switchVisualizer('assets/fabric/gray/');
			break;
			case 8:
				switchVisualizer('assets/fabric/brown/');
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
	    console.log(id);
	    $("#"+id).addClass("itemSelected");
	    $("#"+id).prev().addClass("makeVisible");
	});

	function clearActiveSlides(){

		$(".nav-a").removeClass("itemSelected");
		$(".nav-a").prev().removeClass("makeVisible");
	}

	function staticColors(color)
	{
		$("#static-img-m").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/static/main_image_"+color+".png");
		});
		$("#static-img-1").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/static/1_"+color+".png");
		});
		$("#static-img-2").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/static/2_"+color+".png");
		});
		$("#static-img-3").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/static/3.png");
		});
		$("#static-img-4").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/static/4_"+color+".png");
		});
	}

	function renderColors(color)
	{
		$("#product-render-image").fadeOut(500, function() {
		  $(this).load(function() { $(this).fadeIn(500); });
		  $(this).attr("src", "images/fabric/"+color+".png");
		});
	}

	function switchVisualizer(color)
	{
		$('.ts').empty();
		$('.productrender').ThreeSixty({
		      totalFrames: 73, // Total no. of image you have for 360 slider
		      endFrame: 73, // end frame for the auto spin animation
		      currentFrame: 1, // This the start frame for auto spin
		      imgList: '.threesixty_images', // selector for image list
		      progress: '.spinner', // selector to show the loading progress
		      imagePath: color, // path of the image assets
		      filePrefix: '', // file prefix if any
		      ext: '.jpg', // extention for the assets
		      height: 450,
		      width: 447,
		      responsive: true,
		      disableSpin: true
		  });
	}
 });

