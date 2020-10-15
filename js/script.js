/*================================================
    Preloader
================================================*/
$(window).on('load', () => { // make sure whole site is preloaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});