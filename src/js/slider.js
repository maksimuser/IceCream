$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 850,
    easing: 'ease',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
      },

      {
        breakpoint: 1200,
      },
    ],
  });
});
