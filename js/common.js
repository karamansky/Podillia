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
		});$(".seed-carousel").owlCarousel({
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




	});
});