$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 3 },
            },
        ],
    });
  });