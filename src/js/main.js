$(document).ready(function(){

  $('.header__slider').slick({
		infinite: true,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<svg class="arrow arrow_left slider-arrows"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		nextArrow: '<svg class="arrow slider-arrows slider-arrows_next"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		asNavFor: '.slider-dotshead'
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		prevArrow: '<svg class="arrow arrow_left slider-arrows"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		nextArrow: '<svg class="arrow slider-arrows slider-arrows_next"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		asNavFor: '.slider-map',
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
	});

	$('.slider-holder').slick({
		infinite: true,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<svg class="arrow arrow_left slider-arrows"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		nextArrow: '<svg class="arrow slider-arrows slider-arrows_next"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
	});

});