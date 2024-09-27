"use strict";
/////////////////////////////
// Variables
const sideMenuBtn = document.querySelector(".nav-btn");
const sideMenuCloseBtn = document.querySelector(".close-btn");
const mobileSideMenu = document.querySelector(".mobile-side-menu");
const pageOverlay = document.querySelector(".overlay");
const scrollUpBtn = document.querySelector(".scroll-up-btn");
const mainPage = document.querySelector(".main-page");
const examplesTabsMenu = document.querySelector(".examples-tabs-menu");
const examplesTabs = document.querySelectorAll(".examples-tabs");

/////////////////////////////
// Open & close side menu
const toggleSideMenu = function () {
  mobileSideMenu.classList.toggle("show-right");

  const hasShowRight = mobileSideMenu.classList.contains("show-right");
  pageOverlay.style.opacity = hasShowRight ? 1 : 0;
  pageOverlay.style.visibility = hasShowRight ? "visible" : "hidden";
};

sideMenuBtn.addEventListener("click", toggleSideMenu);
sideMenuCloseBtn.addEventListener("click", toggleSideMenu);
pageOverlay.addEventListener("click", toggleSideMenu);

// Show & hide scrollUp btn
const introSection = document.querySelector(".intro");

const showScrollUpBtn = function (entries) {
  const [entry] = entries;
  scrollUpBtn.style.visibility = !entry.isIntersecting ? "visible" : "hidden";
  scrollUpBtn.style.opacity = !entry.isIntersecting ? 1 : 0;
};

const obsOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(showScrollUpBtn, obsOptions);
observer.observe(introSection);

// Implement smooth scroll up
scrollUpBtn.addEventListener("click", function () {
  mainPage.scrollIntoView({ behavior: "smooth" });
});

// Active tab in example section
examplesTabsMenu.addEventListener("click", function (event) {
  const clickedTab = event.target.closest(".examples-tabs");

  // Check if clicked on tabs area
  if (!clickedTab) return;

  // Set active class to clicked tab
  examplesTabs.forEach((tab) => {
    tab.classList.remove("example-active-tab");
    tab.children[0].classList.remove("active-tab-marker");
  });
  clickedTab.classList.add("example-active-tab");
  clickedTab.children[0].classList.add("active-tab-marker");
});
