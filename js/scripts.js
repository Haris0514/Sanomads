$(document).ready(function(){
  $(".tabs-list button").click(function () {
    let data = $(this).attr("data-tab");
    $(".tabs-list button").removeClass("active"),
      $(this).addClass("active"),
      $(".tabs-content .t-slider").removeClass("active"),
      $("#" + data).addClass("active");
    $("#" + data).slick('refresh');
  });
  $(".burger-icon.icon0").click(function (e) {
    $(this).toggleClass('active');
    $(".mob-wrapper").toggleClass('active');
    $("body").toggleClass('overflow-hidden');
    e.stopPropagation();
    $(document).on("click", function (e) {
      if ($(e.target).is(".header *") === false) {
        $(".burger-icon.icon0").removeClass("active");
        $(".mob-wrapper").removeClass('active');
        $("body").removeClass('overflow-hidden');
      }
    });
  })
  $("button.search").click(function (e) {
    $(".search-form").addClass('active')
    e.stopPropagation();
    $(document).on("click", function (e) {
      if ($(e.target).is(".search-form , .search-form *") === false) {
        $(".search-form").removeClass("active");
      }
    });
  })
  $(".search-form .burger-icon").click(function () {
    $(".search-form").removeClass('active')
  })  
});
$('.slider-wrapper').slick({
  arrows: true,
  dots: false,
  mobileFirst: true,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  infinite: true,
  fade: true,
  prevArrow:
    '<button class="slide-arrow p-arrow"><img src="images/left.svg" alt="img"></button>',
  nextArrow:
    '<button class="slide-arrow n-arrow"><img src="images/right.svg" alt="img"></button>',
});
$(".t-slider").slick({
  arrows: true,
  dots: false,
  mobileFirst: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '<button class="slide-arrow p-arrow"><img src="images/tabs-arr.svg" alt="img"></button>',
  nextArrow: '<button class="slide-arrow n-arrow"><img src="images/tabs-arr.svg" alt="img"></button>',
  responsive: [{
    breakpoint: 767.98,
    settings: { slidesToShow: 3 },
  },
  {
    breakpoint: 991.98,
    settings: { slidesToShow: 3 },
  }]
});
$(".img-txt-slider").slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
});
