window.onload = function () {
    var swiper = new Swiper('.swiper-fasilitas', {
        slidesPerView: 1, // Default to 1 image on small screens
        centeredSlides: true, // Ensure the active slide is centered
        loop: true, // Enable continuous loop mode
        spaceBetween: 20, // Space between slides for mobile
        autoplay: {
            delay: 2000, // 2-second autoplay
            disableOnInteraction: false, // Keep autoplay running on interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 1, // Always show 1 slide below 640px
                spaceBetween: 20 // Adjust spacing for small screens
            },
            640: {
                slidesPerView: 1, // Ensure 1 slide for screens up to 768px
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2, // Show 2 slides on tablet
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3, // Show 3 slides on desktop
                spaceBetween: 40
            }
        }
    });

    console.log("Fasilitas slider is working!");
};