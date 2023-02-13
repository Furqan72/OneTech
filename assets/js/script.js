// owl carousels
$('.owl-carousel1').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            // nav:true
        }
    }
})

$('.owl-carousel2').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    arrows: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            // nav:true
        }
    }
})

$('.owl-3').owlCarousel({
    loop: true,
    dots: false,
    arrows: false,
    nav: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        575: {
            items: 2,
            nav: false
        },
        576: {
            items: 3,
            nav: false
        },
        768: {
            items: 4,
            nav: false
        },
        1200: {
            items: 5,
            nav: false,
            loop: false
        }
    }
})
$('.owl-4').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            // nav:true
        }
    }
})
$('.owl-5').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1
            // nav:true
        },
        // 480:{
        //     items: 2
        // }

        // 575: {
        //     items: 3
        // },
        // 1200: {
        //     items:5
        // }
    }
})
$('.owl-6').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            // nav:true
        }
    }
})
$('.owl-7').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
    }
})
$('.owl-8').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    arrows: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }

    }
})
$('.owl-9').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsiveClass: true,
    arrows: true,
    // dots: true,
    responsive: {
        0: {
            items: 1
        },
        340: {
            items: 2
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        },
        1200: {
            items: 8
        }
    }
})
$('.owl-10').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsiveClass: true,
    arrows: true,
    // dots: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

$(document).ready(function () {
    // carousel buttons

    // next-button
    if ($('.next').click(function () {
        $('.owl-carousel1').trigger('next.owl.carousel');
    }));
    // prev-button
    if ($('.prev').click(function () {
        $('.owl-carousel1').trigger('prev.owl.carousel');
    }));

    // next-1-button
    if ($('.next-1').click(function () {
        $('.owl-3').trigger('next.owl.carousel');
    }));
    // prev-1-button
    if ($('.prev-1').click(function () {
        $('.owl-8').trigger('prev.owl.carousel');
    }));

    // next-2-button
    if ($('.next-2').click(function () {
        $('.owl-8').trigger('next.owl.carousel');
    }));
    // prev-2-button
    if ($('.prev-2').click(function () {
        $('.owl-8').trigger('prev.owl.carousel');
    }));

    // next-3-button
    if ($('.next-3').click(function () {
        $('.owl-9').trigger('next.owl.carousel');
    }));
    // prev-3-button
    if ($('.prev-3').click(function () {
        $('.owl-9').trigger('prev.owl.carousel');
    }));


    // nav search-field drop-down
    $('#all-categories').click(function () {
        if ($('#dropdown-1').hasClass('d-none')) {
            $('#dropdown-1').removeClass('d-none');
        }
        else {
            $('#dropdown-1').addClass('d-none');
        }
    });

    // top-dropdown text-select
    $(".category_search").click(function (e) {
        let value = $(this).text();
        $("#list-default").html(value);
        // console.log(value);
    });


    // navbar-dropdowns
    if ($(window).width() > 992) {
        $(".drp").hover(function () {
            if ($(this).find('.dropdown-custom').hasClass('d-none')) {
                $(this).find('.dropdown-custom').removeClass('d-none');
            } else {
                $(this).find('.dropdown-custom').addClass('d-none');
            }
        });
    }

    if ($(window).width() < 992) {
        $(".drp").click(function () {
            $(this).find('.dropdown-custom').toggleClass('d-none');
        });
    }

    // navbar-category dropdown
    if ($(window).width() >= 992) {
        $(".drp-1").hover(function () {
            if ($(this).find('.dropdown-category').hasClass('d-none')) {
                $(this).find('.dropdown-category').removeClass('d-none');
            } else {
                $(this).find('.dropdown-category').addClass('d-none');
            }
        });
    }

    if ($(window).width() < 992) {
        $(".drp-1").click(function () {
            if ($(this).find('.dropdown-category').hasClass('d-none')) {
                $(this).find('.dropdown-category').removeClass('d-none');
            } else {
                $(this).find('.dropdown-category').addClass('d-none');
            }
        });
    }


       // navbar-category dropdown >> hardware >> menu-dropdown
       if ($(window).width() >= 992) {
        $(".drp-2").hover(function () {
            if ($(this).find('.dropdown-category-1').hasClass('d-none')) {
                $(this).find('.dropdown-category-1').removeClass('d-none');
            } else {
                $(this).find('.dropdown-category-1').addClass('d-none');
            }
        });
    }

    if ($(window).width() < 992) {
        $(".drp-2").click(function () {
            // if ($(this).find('.dropdown-category-1').hasClass('d-none')) {
            //     $(this).find('.dropdown-category-1').removeClass('d-none');
            // } else {
                $(this).find('.dropdown-category-1').toggleClass('d-none');
            // }
        });
    }
    $(".dropdown-custom ul li").on("click", function(event) {
      var $trigger = $(".dropdown-custom");
      if ($trigger !== event.target && !$trigger.has(event.target)
        .length) {
            console.log('yes');
        // if ($(".drp-2").find('.dropdown-category-1').hasClass('d-none')) {
        //     // $(this).find('.dropdown-category-1').removeClass('d-none');
        // }
      }
    });

    // SMALL-menu hamburger
    $('#hamburger').click(function () {
        if ($('#nav-small').hasClass('d-none')) {
            $('#nav-small').removeClass('d-none');
        }
        else {
            $('#nav-small').addClass('d-none');
        }

    });


    // tabs crousals >> section no. 1
    $('#s1-heading1').click(function (e) {
        $(".tab_button-1").removeClass('h-design');
        $(".tab_content-1").addClass('hidden');
        $("#owl-empty1").removeClass("hidden");
        $(this).addClass('h-design');

    });

    $('#s1-heading2').click(function (e) {
        $(".tab_button-1").removeClass('h-design');
        $(".tab_content-1").addClass('hidden');
        $("#owl-empty2").removeClass("hidden");
        $(this).addClass('h-design');
    });
    $('#s1-heading3').click(function (e) {
        $(".tab_button-1").removeClass('h-design');
        $(".tab_content-1").addClass('hidden');
        $("#owl-empty3").removeClass("hidden");
        $(this).addClass('h-design');

    });

    // tabs crousals >> section no. 5
    $('#s5-heading1').click(function (e) {
        $(".tab_button-2").removeClass('h-design-1');
        $(".tab_content-2").addClass('hidden');
        $("#owl-empty4").removeClass("hidden");
        $(this).addClass('h-design-1');

    });

    $('#s5-heading2').click(function (e) {
        $(".tab_button-2").removeClass('h-design-1');
        $(".tab_content-2").addClass('hidden');
        $("#owl-empty5").removeClass("hidden");
        $(this).addClass('h-design-1');

    });

    $('#s5-heading3').click(function (e) {
        $(".tab_button-2").removeClass('h-design-1');
        $(".tab_content-2").addClass('hidden');
        $("#owl-empty6").removeClass("hidden");
        $(this).addClass('h-design-1');

    });

    // tabs crousals >> section no. 6
    $('#s6-heading1').click(function () {
        $(".tab_button-3").removeClass('h-design');
        $(".tab_content-3").addClass('hidden');
        $("#owl-empty7").removeClass("hidden");
        $(this).addClass('h-design');

    });

    $('#s6-heading2').click(function () {
        $(".tab_button-3").removeClass('h-design');
        $(".tab_content-3").addClass('hidden');
        $("#owl-empty8").removeClass("hidden");
        $(this).addClass('h-design');

    });

    $('#s6-heading3').click(function () {
        $(".tab_button-3").removeClass('h-design');
        $(".tab_content-3").addClass('hidden');
        $("#owl-empty9").removeClass("hidden");
        $(this).addClass('h-design');
    });


    // heart color effect
    $('.heart_icon').click(function (e) {
        $(this).toggleClass('svg-red');
    });

});

