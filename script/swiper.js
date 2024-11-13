// swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: false,
    slidesPerView: 3, 
    spaceBetween: 30, 
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
    },
});
