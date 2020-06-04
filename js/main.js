/** First Slider */
$('.slider-one')
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
    prevArrow:".site-slider .site-btn .prev",
    nextArrow:".site-slider .site-btn .next",
});