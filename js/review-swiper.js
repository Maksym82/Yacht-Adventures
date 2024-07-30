$(document).ready(function () {
  new Swiper('.swiper__reviews-box', {
    paginationClickable: true,
    direction: 'horizontal',
    dynamicBullets: true,
    initialSlide: 0,
    slidesOffsetBefore: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
        simulateTouch: false,
      },
      768: {
        // loop: true,
        // centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
