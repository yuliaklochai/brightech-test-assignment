new Swiper(".swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});

//Hamburger menu 

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}