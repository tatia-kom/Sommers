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

});