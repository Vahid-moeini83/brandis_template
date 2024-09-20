"use strict";
/////////////////////////////
// Variables
const sideMenuBtn = document.querySelector(".nav-btn");
const sideMenuCloseBtn = document.querySelector(".close-btn");
const mobileSideMenu = document.querySelector(".mobile-side-menu");
const pageOverlay = document.querySelector(".overlay");

/////////////////////////////
// Open & close side menu
const openSideMenu = function () {
  mobileSideMenu.classList.remove("hidden-right");
  mobileSideMenu.classList.add("show-right");
  pageOverlay.style.opacity = 1;
  pageOverlay.style.visibility = "visible";
};

const closeSideMenu = function () {
  mobileSideMenu.classList.remove("show-right");
  mobileSideMenu.classList.add("hidden-right");
  pageOverlay.style.opacity = 0;
  pageOverlay.style.visibility = "hidden";
};

sideMenuBtn.addEventListener("click", openSideMenu);
sideMenuCloseBtn.addEventListener("click", closeSideMenu);
pageOverlay.addEventListener("click", closeSideMenu);
