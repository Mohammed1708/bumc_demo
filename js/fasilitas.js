window.onload = function () {
    var swiper = new Swiper('.swiper-fasilitas', {
        slidesPerView: 3, // Number of slides visible at once
        centeredSlides: true, // Ensure the active slide is centered
        loop: true, // Enable continuous loop mode
        spaceBetween: 20, // Space between slides
        autoplay: {
            delay: 2000, // Time in milliseconds (2 seconds)
            disableOnInteraction: false, // Keep autoplay running even when the user interacts
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    console.log("Fasilitas slider is working!");
};