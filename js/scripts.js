$(document).ready(function() {

    var welcomeTop = $('.welcome__lineblock').offset().top;
    var height = $(window).height();

    $('.categories__item').each(function(i) {
        const block = $(this);
        setTimeout(function() {
            block.addClass('categories__item--active');
            setTimeout(function() {
                block.removeClass('categories__item--active');
            }, 200);
        }, i*300);
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
        $('.boats__more').remove();
        $('.boats__item--hidden').removeClass('boats__item--hidden');
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

    reviewsTextSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.reviews__nums').text(nextSlide+1+'/'+reviewsSliderCount);
    });

});