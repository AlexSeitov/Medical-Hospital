$(function() {

    // Fixed Header

    var header = $("#header"),
        mainblockH = 200,
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= mainblockH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".nav__link").removeClass("nav__link--active");
        $this.addClass("nav__link--active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


    // Mobile menu

    $(".nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("nav-toggle--active");
        $(".mobile-menu").toggleClass("mobile-menu--active");
    });
});