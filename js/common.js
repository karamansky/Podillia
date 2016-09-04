"use strict";

$(function(){
	$(document).ready(function() {

		//owl carousel init
		$(".owl-carousel").owlCarousel({
			items							: 3,
			itemClass					: ".field__item",
			responsive				: true,
			nav								: true
		});
		$(".seed-carousel").owlCarousel({
			itemsDesktop 			: [1920,4], //4 items between 1000px and 901px
			itemsDesktopSmall	: [1199,3], //4 items between 1000px and 901px
			itemsTablet				: [789,2], //2 items between 600 and 0
			itemsMobile 			: false,
			itemClass					: ".seed__item",
			responsive				: true,
			navigation				: true,
			navigationText		: ["",""]
		});
		var owl = $(".owl-carousel").data('owlCarousel');
		$(".prev").click(function(){
			owl.prev();
		});
		$(".next").click(function(){
			owl.next();
		});

		$(".owl-news").owlCarousel({
			items 					: 1,
			itemClass				: ".item-img",
			responsive			: true,
			navigation 			: true,
			navigationText	: ["",""]
		});


		//bx-slider
		// $('.bx-slider').bxSlider({
		//
		// });

		//interactive hover block
		$(".interactive__item").hover(
				function(){
					var target = $(this).data( "target" );
					$(".target-interactive__item div.target"+target ).css("background-color","#dddddd");
				},
				function(){
					var target = $(this).data( "target" );
					$(".target-interactive__item div.target"+target ).css("background-color","#fff");
				}
		);

		//selects - filters

		$("#cultures, #substance, #safe, #manufacturers").selectmenu();

		


	});
});