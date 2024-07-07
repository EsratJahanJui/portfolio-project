// SERVICES TOGGLE

const servicesButtons = document.querySelectorAll(".service__item");
const serviceDetails = document.querySelector(".services__right");

const getService = (category) => {
  const details = servicesData.find((item) => item.category === category);
  serviceDetails.innerHTML = `
          <h3>${details.title}</h3>
          ${details.description
            .map((paragraph) => "<p>" + paragraph + "</p>")
            .join("")}
        `;
};
const removeActiveClass = () => {
  servicesButtons.forEach((button) => {
    button.classList.remove("active");
  });
};

servicesButtons.forEach((item) => {
  removeActiveClass();
  item.addEventListener("click", () => {
    const serviceClass = item.classList[1];
    // serviceClass is for obtain second class of the servicesButton(.service__item);
    getService(serviceClass);
    item.classList.add("active");
  });
});
getService("frontend");
// END OF SERVICE SECTION

// ============MIXITUP

const containerEl = document.querySelector(".projects__container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

// swiper from website for testimonial section
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ===============NAV TOGGLE (small screens)
const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navCloseBtn.style.display = "none";
  navOpenBtn.style.display = "inline-block";
};
navOpenBtn.addEventListener("click", openNavHandler);

navCloseBtn.addEventListener("click", closeNavHandler);

// close nav menu on click of nav link on small screen
const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}

// ===========FOR DARK MODE
const themeBtn = document.querySelector(".nav__theme-btn");
themeBtn.addEventListener("click", () => {
  let bodyClass = document.body.className;

  if (!bodyClass) {
    bodyClass = "dark";
    document.body.className = bodyClass;
    // for change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    // save theme to local stroage
    window.localStorage.setItem("theme", bodyClass);
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    // for change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    // save theme to local stroage
    window.localStorage.setItem("theme", bodyClass);
  }
});

// load theme on load
window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
});
