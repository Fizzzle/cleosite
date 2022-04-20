const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
   autoplay: {
   delay: 3000,
     pauseOnMouseEnter: true,
   disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});