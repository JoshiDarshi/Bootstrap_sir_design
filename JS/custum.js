$(document).ready(function () {

    $('.banner-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true,
    });


    $('.srvcs-slider .owl-carousel').owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        responsiveClass: true,
        responsive : {
            0 : {
             items: 1,
            },
           550 : {
            items: 2,
            },
            768 : {
                items: 3,
            }
        }
    });



})