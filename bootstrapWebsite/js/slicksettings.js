$('.team-carousel').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {slidesToShow: 2 }
        },
        {
            breakpoint: 992,
            settings: {slidesToShow: 3}
        }
    ]
  });