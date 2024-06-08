var swiper = new Swiper(".slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
   autoplay: {
     delay: 1500,
   },
  centeredSlides: true,
  loop:true,
  //inicialSlide: 1,
  centerInsufficientSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
