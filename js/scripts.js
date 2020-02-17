$(document).ready(function() {

    var welcomeTop = $('.welcome__lineblock').offset().top;
    var height = $(window).height();

    $('.categories__item').each(function(i) {
        const block = $(this);
        setTimeout(function() {
            block.addClass('categories__item--active');
            setTimeout(function() {
                block.removeClass('categories__item--active');
                if (i == 3) {
                    $('.categories__item').eq(1).addClass('categories__item--active');
                }
            }, 200);
        }, i*300);
    });


    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();
        $('body').addClass('modal-opened');
        $('.modal').addClass('modal--opened');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal__block').click(function(e) {
        e.stopPropagation();
    });




    $('.categories__item').mouseover(function() {
        $('.categories__item--active').removeClass('categories__item--active');
    });
    $('.categories__item').mouseout(function() {
        $('.categories__item').eq(1).addClass('categories__item--active');
    });

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > (welcomeTop - height + 150)) {
            $('.welcome__item').each(function(i) {
                const block = $(this);
                setTimeout(function() {
                    block.addClass('welcome__item--show');
                }, i*300);
            });
        }
        else if ($(window).scrollTop() < (welcomeTop - height)) {
            $('.welcome__item').removeClass('welcome__item--show');
        }
    });

    $('.header__mobile-menu-button').click(function(e) {
        e.preventDefault();
        $('.head__menu-wrap').slideToggle();
    });

    $('.video').slick({
        arrows: true,
        autoplay: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.boats__more').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('boats-show')) {

            $('.boats__item').each(function(i) {
                if (i > 2) {
                    const block = $(this);

                    if (i == 3) {
                        block.removeClass('boats__item--hidden');
                    }
                    else {
                        setTimeout(function() {
                            block.removeClass('boats__item--hidden');
                        }, (i-3)*300);
                    }
                }
            });

            $(this).html('<span>Свернуть все</span>').removeClass('boats-show').addClass('boats-hide');
        }
        else {
            $(this).html('<span>Показать все</span>').removeClass('boats-hide').addClass('boats-show');
            $('.boats__item').each(function(i) {
                if (i > 2) {
                    $(this).addClass('boats__item--hidden');
                }
            });
            $('html, body').animate({ scrollTop: $('.boats').offset().top }, 400);
        }
    });

    $('.reviews__slider-phones').slick({
        arrows: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 2,
        asNavFor: $('.reviews__slider-text'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    const reviewsSliderCount = $('.reviews__slide-text').length;
    $('.reviews__nums').text('1/'+reviewsSliderCount);

    const reviewsTextSlider = $('.reviews__slider-text').slick({
        arrows: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        asNavFor: $('.reviews__slider-phones'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var revMaxHeight = 0;

    $('.reviews__slide-text').each(function() {
        const revHeight = $(this).height();
        if (revHeight > revMaxHeight) revMaxHeight = revHeight;
    });

    $('.reviews__slide-text').css({height: revMaxHeight+'px'});

    reviewsTextSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.reviews__nums').text(nextSlide+1+'/'+reviewsSliderCount);
    });

});