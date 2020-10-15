/*================================================
    Preloader
================================================*/
$(window).on('load', () => { // make sure whole site is preloaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*================================================
    Team
================================================*/
$(() => { // short form of $(document).ready method
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });
})