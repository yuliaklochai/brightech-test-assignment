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

//Slow scroll 

let anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    let blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
});