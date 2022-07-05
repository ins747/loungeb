$(document).ready(function(){
    // swiper
    var swiper = new Swiper(".swiper", {
        autoplay: {
            delay:4000,
            disableOnInteraction: false
        },
        spaceBetween: 100,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});