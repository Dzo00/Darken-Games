$(document).ready(function() {

    $('.sideNav').hide();

    $('.popUp').hide();

    $('.sideNav li a').click(function(){

        $('.sideNav').slideUp();

    })

    setTimeout(function(){

        $('.popUp').slideDown();
    
    },9000);

    $('.closePop').click(function() {

        $('.popUp').slideUp();

    });
    
    $('.activator').on('click', function() {

        $('.sideNav').slideToggle();

        $('.logo').removeClass('logo');
        
    });

    $('.goTop').hide();

    $('.goTop').on('click',function() {

        $('html').animate({scrollTop: 0}, 100);

    });


    $(window).scroll(function(){

        const scroll = $(this).scrollTop();

        if(scroll > 50) {

            $('nav').css('background','#141414');
            $('.logo').css({width: '100px'})

        } else {
            
            $('nav').css('background','transparent');
            $('.logo').css({width: '160px'})

        }

        if(scroll > 150) {

            $('.goTop').fadeIn();

        } else $('.goTop').fadeOut(0);

        // console.log(scroll)

        if(scroll > 1150) {

            setTimeout(function(){

                $('.imgPlay').css('transform','rotate(-45deg)');
            
            },1350);

        }

    })

    $('.slickCarousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
       

});