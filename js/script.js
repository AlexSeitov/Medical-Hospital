$(function() {

    // Fixed Header

    var header = $("#header"),
        mainblockH = 70,
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= mainblockH ) {
            header.addClass("header-fixed");
        } else {
            header.removeClass("header-fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".header-nav__link").removeClass("header-nav__link--active");
        $this.addClass("header-nav__link--active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


    // Mobile menu

    $(".nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("nav-toggle--active");
        $(".mobile-menu").toggleClass("mobile-menu--active");
        $("#top").toggleClass("top--active");
    });

    $(".mobile-menu__link").on("click", function(event) {
        event.preventDefault();

        $(".mobile-menu").removeClass("mobile-menu--active");
        $(".nav-toggle").removeClass("nav-toggle--active");
    });


    // accordeon

    $('.works-accordeon__title').click(function(event) {
		if($('.works-accordeon').hasClass('works-accordeon--one')){
			$('.works-accordeon__title').not($(this)).removeClass('works-accordeon__title--active');
			$('.works-accordeon__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('works-accordeon__title--active').next().slideToggle(300);
    });


    // magnific popup
    
    $('.gallery__container').magnificPopup({
        type: 'image',
        delegate: 'a',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, 
        duration: 300, 
        easing: 'ease-in-out',    
        }
    });

    // counter up

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});