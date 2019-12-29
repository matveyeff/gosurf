$(document).ready(function(){

  $('.header__slider').slick({
		infinite: true,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<svg class="arrow arrow_left slider-arrows"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		nextArrow: '<svg class="arrow slider-arrows slider-arrows_next"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		asNavFor: '.slider-dots'
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<svg class="arrow arrow_left slider-arrows"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
		nextArrow: '<svg class="arrow slider-arrows slider-arrows_next"><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></a>',
	})

});