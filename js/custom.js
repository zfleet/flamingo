/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(200); // set duration in brackets    
});


$(document).ready(function () {

    /* Home Slideshow Vegas
    -----------------------------------------------*/
    $(function () {
        $('body').vegas({
            slides: [
                {src: 'images/slide-1.jpg'}
            ],
            timer: false,
            transition: ['zoomOut',]
        });
    });


    /* Back top
   -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })


    /* wow
    -------------------------------*/
    new WOW({mobile: false}).init();

    /* ScrollTo
    -------------------------------*/
    $("#feature-button").click(function () {
        $(window).scrollTo($("#feature"), 500)
    })
    ;
    $("#contact-button").click(function () {
        $(window).scrollTo($("#contact"), 500)
    })
});

