
  // mobile menu 
$(".header__top .menu__bar").click(function(){
  $(".mobile__menu").toggleClass("open");
})


// header bar
$(window).scroll(function(){
  // sticky navbar on scroll script
  if(this.scrollY > 20){
      $('.header__section__menu').addClass("sticky");
  }else{
      $('.header__section__menu').removeClass("sticky");
  }
  
  // scroll-up button start
  if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
});

$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});
//   scroll-up button end


// banner swiper slider
var swiper = new Swiper(".bannerSwiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 500
  
});


// users commnet swiper
var swiper = new Swiper(".users__swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 500
});




var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

new WOW().init();
