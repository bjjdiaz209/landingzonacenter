const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");



const checkbox = document.getElementById('checkbox');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

checkbox.addEventListener('click', () => {
  basic.textContent = basic.textContent === '240 bs' ? '90 bs' : '240 bs';
  professional.textContent = professional.textContent === '360 bs' ? '150 bs ' : '360 bs';
  master.textContent = master.textContent === '560 bs' ? '270 bs' : '560 bs';
});


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/*SCROLL HOME*/
sr.reveal('.header-title', {})
sr.reveal('.text', {delay: 200})
sr.reveal('.img-element', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.card-content', {delay: 500})
sr.reveal('.title-sm', {delay: 300})
sr.reveal('.title', {delay: 400})
sr.reveal('.info', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})
