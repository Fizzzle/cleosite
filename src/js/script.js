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

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.nav'),
  menuclose = document.querySelector('.menu__close');
     
hamburger.addEventListener('click', () => {
  menu.classList.add('active');
})

menuclose.addEventListener('click', () => {
  menu.classList.remove('active');
})