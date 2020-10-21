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
