$(document).ready (function () {
    videoHendler();

    /* BANNER IMAGES slider */
    $('.banner__slider-image-items').slick({
        arrows: false,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        // appendArrows: $('.customer-reviews__slider-arrows'),
        // prevArrow: $('.customer-reviews__slider-arrow-left'),
        // nextArrow: $('.customer-reviews__slider-arrow-right'),
    });

    /* BANNER TEXT slider */
    $('.banner__slider-info-items').slick({
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        // appendArrows: $('.customer-reviews__slider-arrows'),
        prevArrow: $('.banner__slider-arrow-left'),
        nextArrow: $('.banner__slider-arrow-right'),
        asNavFor: ".banner__slider-image-items",
    });

    /* CUSTOMER REVIEWS slider */
    $('.customer-reviews__slider').slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $('.customer-reviews__slider-arrows'),
        prevArrow: $('.customer-reviews__slider-arrow-left'),
        nextArrow: $('.customer-reviews__slider-arrow-right'),
    });

    /* OUR CLIENTS slider */
    $('.our-clients__slider').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $('.our-clients__slider-arrows'),
        prevArrow: $('.our-clients__slider-arrow-left'),
        nextArrow: $('.our-clients__slider-arrow-right'),
    });

    
});

function videoHendler() {
    let playButton = document.getElementById("promo-video__play-button");
    let video = document.getElementById("promo-video");
    playButton.addEventListener("click", function() {
        video.play();
        playButton.style.display = 'none';
    });
    video.addEventListener("play", function() {
        playButton.style.display = 'none';
    });
    video.addEventListener("pause", function() {
        playButton.style.display = 'flex';
    });
};
