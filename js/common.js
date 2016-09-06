"use strict";

$(function(){
	$(document).ready(function() {

		//smoothScroll
		$('div.scroll-mouse').on('click', function() {
			var top = $("#catalog").offset().top;
			$('body,html').animate({scrollTop: top}, 1500);

		});


		//owl carousel init
		$(".owl-carousel").owlCarousel({
			items							: 3,
			itemClass					: ".field__item",
			responsive				: true,
			nav								: true
		});
		$(".seed-carousel").owlCarousel({
			itemsDesktop 			: [1920,4],
			itemsDesktopSmall	: [1199,3],
			itemsTablet				: [789,2],
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

		//selects - filters
		$("#cultures, #substance, #safe, #manufacturers").selectmenu();

		$(".ui-widget.ui-widget-content").niceScroll({

			cursorcolor       : "#851900",
			cursorborder      : "0px solid #851900",
			cursorborderradius: "0",
			railpadding       : {top:0,right:10,left:0,bottom:0},
			// background				: "#bababa",
			bouncescroll			: true,
			cursorminheight		: "70"

		});


	});
});