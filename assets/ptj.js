// ============ Toggle Menu ============
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

navToggle?.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose?.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// ============ Remove Menu on Mobile ============
document.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// ============ Skills Accordion ============
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

skillsHeader.forEach(header => {
  header.addEventListener("click", function () {
    const parent = this.parentNode;
    [...skillsContent].forEach(el => el.className = "skills__content skills__close");
    if (parent.className === "skills__content skills__close") {
      parent.className = "skills__content skills__open";
    }
  });
});

// ============ Services Modal ============
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");
  });
});

modalCloses.forEach(close => {
  close.addEventListener("click", () => {
    modalViews.forEach(view => view.classList.remove("active-modal"));
  });
});

// ============ Portfolio Swiper ============
new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ============ Scroll Sections Active Link ============
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 50,
          sectionHeight = current.offsetHeight,
          sectionId = current.getAttribute("id");

    const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
});

// ============ Change Background Header ============
window.addEventListener("scroll", () => {
  const nav = document.getElementById("header");
  nav.classList.toggle("scroll-header", window.scrollY >= 80);
});

// ============ Show Scroll Up ============
window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
});

// ============ Dark / Light Theme Toggle ============
const themeButton = document.getElementById("theme-button"),
      darkTheme = "dark-theme",
      iconTheme = "uil-sun";

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Load stored theme
if (localStorage.getItem("selected-theme")) {
  document.body.classList.toggle(darkTheme, localStorage.getItem("selected-theme") === "dark");
  themeButton.classList.toggle(iconTheme, localStorage.getItem("selected-icon") === "uil-moon");
}

// Toggle and store theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});