// Initial variables for the pageSetup() function and screensize event listeners
const topNav = document.querySelector('#top-nav');
const navContainer = document.querySelector('.nav-container');
const logo = document.querySelector('#logo');
const rightLinks = document.querySelector('.right-links');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');
const welcome = document.querySelector('.welcome');
const welcomeContainer = document.querySelector('.welcome-container');
// const topBar = document.querySelector('.top-bar');
// const middleBar = document.querySelector('.middle-bar');
// const bottomBar = document.querySelector('.bottom-bar');

//  Start - Page setup - sets initial classes for the objects that change between mobile & desktop
//  view & on screensize change
let flexMargin = window.getComputedStyle(navContainer).marginRight;

window.addEventListener('resize', () => {
  if (window.innerWidth < 678) {
    topNav.classList.remove('flex');
    topNav.classList.add('hidden');
    navToggle.classList.add('flex');
    rightLinks.classList.remove('flex');
    rightLinks.classList.add('hidden');
    logo.classList.add('hidden');
    navBar.classList.add('hidden');
    welcome.classList.add('welcome-mobile-background');
    welcomeContainer.style.marginTop = '25px';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 677) {
    flexMargin = window.getComputedStyle(navContainer).marginRight;
    topNav.style.paddingRight = `${flexMargin}`;
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
    navToggle.classList.remove('flex');
    navToggle.classList.add('hidden');
    rightLinks.classList.add('flex');
    logo.classList.remove('hidden');
    navBar.classList.remove('hidden');
    welcome.classList.add('welcome-desktop-background');
    welcomeContainer.style.marginTop = '100px';
  }
});

function pageSetup() {
  const mobileView = window.innerWidth < 678;

  if (mobileView) {
    topNav.classList.add('hidden');
    topNav.classList.remove('flex');
    navToggle.classList.remove('hidden');
    navToggle.classList.add('flex');
    rightLinks.classList.add('hidden');
    logo.classList.add('hidden');
    navBar.classList.add('hidden');
    welcome.classList.add('welcome-mobile-background');
    welcome.classList.remove('welcome-desktop-background');
    welcomeContainer.style.marginTop = '25px';
  }
  // End - page setup

  if (!mobileView) {
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
    navToggle.classList.add('hidden');
    rightLinks.classList.add('flex');
    welcome.classList.add('welcome-desktop-background');
    welcome.classList.remove('welcome-mobile-background');
  }
}

pageSetup();