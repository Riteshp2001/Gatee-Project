var a = 0;
$(window).scroll(function () {
  var oTop = $(".achievements_grid").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".bottom_achieve").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

$(window).load(function () {
  var in_view = new Waypoint.Inview({
    element: $(".head::after")[0],
    enter: function () {
      $("#.head::after").addClass("start");
    },
    exit: function () {
      // optionally
      $(".head::after").removeClass("start");
    },
  });
});


