"use strict";

$(function(){
	$(document).ready(function() {

		//owl carousel init
		$(".owl-carousel").owlCarousel({
			items 					: 1,
			// autoHeight			: true,
			// autoWidth 			: true,
			itemClass				: ".field__item",
			responsive			: false,
			nav: true
		});
		$(".seed-carousel").owlCarousel({
			items 					: 4,
			itemClass				: ".seed__item",
			responsive			: false,
			navigation			: true,
			navigationText	: ["",""]
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
			responsive			: false,
			navigation 			: true,
			navigationText	: ["",""]
		});


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



	});
});