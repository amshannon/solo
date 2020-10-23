/*================================================
    Preloader
================================================*/
$(window).on("load", () => {
  // make sure whole site is preloaded
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

/*================================================
    Team
================================================*/
$(function () {
  // short form of $(document).ready method
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
  });
});

/*================================================
    Progress Bars
================================================*/
$(() => {
  // alternative short form of $(document).ready method

  $("#progress-bars").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          1000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
/*================================================
    Service - Responsive Tabs
================================================*/
$(function () {
  $("#services-tabs").responsiveTabs({
    startCollapsed: "accordion",
    animation: "slide",
  });
});

/*================================================
    Portfolio - Isotope Filter
================================================*/
$(window).on("load", function () {
    // init Isotope
    var $grid = $('#isotope-container').isotope({
        // options
    });
    // filter items on button click
    $('#isotope-filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* Magnifier */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, but clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
