$(document).ready(function(){
 $('.slider-main').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true
 });
 $('.gallery-item').magnificPopup({
 	type : 'image',
 	gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
 });
 $('.quotes-slider').slick({
    dots: true,
    arrows: true,
    appendDots: ".quotes-slider-nav",
    appendArrows: ".quotes-slider-nav",
    prevArrow: '<img src="img/back.svg" class="slickPrev" alt="">',
    nextArrow: '<img src="img/next.svg" class="slickNext"alt="">',
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1
 });
});