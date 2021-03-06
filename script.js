'use strict';

// Homepage Top nav
const navItems = document.querySelector(".items");
const navToggle = document.querySelector(".toggle--nav");
const hrline = document.querySelector('.horizontal-line');
const topNavToggle = function(){
  navToggle?.addEventListener('click', ()=>{
    navItems.classList.toggle('active')
    hrline.classList.toggle('show')
  })
}
topNavToggle();

// Dashboard side nav
const sideNav = document.querySelector(".dashboard--sidenav");
const sideToggle = document.querySelector(".toggle--sidenav");
const sideNavToggle = function(){
  sideToggle?.addEventListener('click', ()=>{
    sideNav.classList.toggle('active')
  })
}
sideNavToggle();

const sideNavLogo = document.querySelector('.x') 
const toggleCollapse = function(){
  sideNavLogo?.addEventListener('click', function(){
    sideNav.classList.toggle('active')
  })
}
toggleCollapse();

// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';






















































// // Slider
// const slider = function(){
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector('.dots');
  
//   let curSlide = 0;
//   const maxSlide = slides.length;
  
//   // const slider = document.querySelector('.slider');
  
//   // slider.style.transform = 'scale(0.4) translateX(-800px)';
//   // slider.style.overflow = 'visible';
//   const createDots = function(){
//     slides.forEach(function(_, i){
//       dotContainer.insertAdjacentHTML('beforeend', 
//       `<button class = 'dots__dot' data-slide="${i}"></button>`)
//     });
//   };
  
//   const activateDot = function(slide){
//     document.querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList
//       .remove('dots__dot--active'));
  
//     document.querySelector(`.dots__dot[data-slide='${slide}']`)
//     .classList.add('dots__dot--active');
//   }
  
//   const goToSlide = function(slide){
//     slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) );
//   }
  
//   // Next slide
//   const nextSlide = function(){
//     if(curSlide === maxSlide - 1){
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide)
//     activateDot(curSlide);
//   }
//   const prevSlide = function(){
//     if(curSlide === 0){
//       curSlide = maxSlide -1;
//     } else{
//       curSlide--;
//     }
//     goToSlide(curSlide)
//     activateDot(curSlide);
//   }
  
//   const init = function () {
//     goToSlide(0);
//     createDots();
  
//     activateDot(0);
//   };
//   init();
  
//   // Event Handlers
//   btnRight.addEventListener('click', nextSlide);
//   btnLeft.addEventListener('click', prevSlide);
  
//   document.addEventListener('keydown', function(e){
//     if(e.key === 'ArrowLeft') prevSlide();
//     e.key === 'ArrowRight' && nextSlide();
//   });
  
//   dotContainer.addEventListener('click', function(e){
//     if(e.target.classList.contains('dots__dot')){
//       const {slide} = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   })
//   }
//   slider();