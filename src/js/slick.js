$('.multiple-items').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  adaptiveHeight: true,
  cssEase: 'linear',
  autoplay: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
