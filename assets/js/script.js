/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	jQuery(document).ready(function($) {
		$("nav a, .page-scroll").click(function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 500);
		});
	});
	

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});


	/* ========================================================================= */
	/*	onscroll navigation
	/* ========================================================================= */
	$(window).scroll(function() {
        if($(document).scrollTop() > 50){
            $('.navigation').addClass('onscroll');
        }else{
            $('.navigation').removeClass('onscroll');
        }
    });

    if($(document).scrollTop() > 50){
        $('.navigation').addClass('onscroll');
    }else{
        $('.navigation').removeClass('onscroll');
	}
	
	//add class nav-shown to body when mobile nav is displayed
	$(".navbar-toggler").click(function(){
		if($("#navigation").hasClass("show") == false) {
			$("body").addClass("nav-shown");
		}else {
			$("body").removeClass("nav-shown");
		}
	});

	if($(document).width() < 768) {
        $('#navigation a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
			$("body").removeClass("nav-shown");
        });
    }

});


