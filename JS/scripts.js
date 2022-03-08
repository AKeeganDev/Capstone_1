// Initial variables for the pageSetup() function and screensize event listeners

const topNav = document.querySelector('#top-nav');
const navContainer = document.querySelector('.nav-container');
const logo = document.querySelector('#logo');
const rightLinks = document.querySelector('.right-links');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');
const welcome = document.querySelector('.welcome');
const welcomeContainer = document.querySelector('.welcome-container');
const cardContainer = document.querySelector('.card-container');
const projectsCards = document.querySelectorAll('.project-card');
const cardDescription = document.querySelectorAll('.description');

//  Start - Page setup - sets initial classes for the objects that change between mobile & desktop
//  This section has window listeners to toggle mobile & desktop view when the screen changes
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
    welcome.classList.remove('welcome-desktop-background');
    welcome.style.backgroundPosition = 'center';
    welcomeContainer.style.marginTop = '25px';
    cardContainer.classList.add('display-column');
    cardContainer.classList.remove('display-row');
    projectsCards.forEach((project) => { project.classList.add('display-row'); });
    projectsCards.forEach((project) => { project.classList.remove('display-column'); });
    cardDescription.forEach((description) => { description.classList.remove('text-align-center'); });
    cardDescription.forEach((description) => { description.classList.add('text-align-left'); });
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
    welcome.classList.remove('welcome-mobile-background');
    welcome.style.backgroundPosition = 'center';
    welcomeContainer.style.marginTop = '100px';
    projectsCards.forEach((project) => { project.classList.remove('display-row'); });
    projectsCards.forEach((project) => { project.classList.add('display-column'); });
    cardContainer.classList.add('display-row');
    cardContainer.classList.remove('display-column');
    cardDescription.forEach((description) => { description.classList.add('text-align-center'); });
    cardDescription.forEach((description) => { description.classList.remove('text-align-left'); });
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
    cardContainer.classList.add('display-column');
    welcomeContainer.style.marginTop = '25px';
    cardContainer.classList.add('display-column');
    cardContainer.classList.remove('display-row');
    projectsCards.forEach((project) => { project.classList.add('display-row'); });
    projectsCards.forEach((project) => { project.classList.remove('display-column'); });
    cardDescription.forEach((description) => { description.classList.remove('text-align-center'); });
    cardDescription.forEach((description) => { description.classList.add('text-align-left'); });
  }

  if (!mobileView) {
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
    flexMargin = window.getComputedStyle(navContainer).marginRight;
    topNav.style.paddingRight = `${flexMargin}`;
    navToggle.classList.add('hidden');
    rightLinks.classList.add('flex');
    welcome.classList.add('welcome-desktop-background');
    welcome.classList.remove('welcome-mobile-background');
    projectsCards.forEach((project) => { project.classList.remove('display-row'); });
    projectsCards.forEach((project) => { project.classList.add('display-column'); });
    cardContainer.classList.add('display-row');
    cardContainer.classList.remove('display-column');
    cardDescription.forEach((description) => { description.classList.remove('text-align-left'); });
    cardDescription.forEach((description) => { description.classList.add('text-align-center'); });
  }
}

pageSetup();

// Hamburger & Mobile Sidebar Menu code
let sidebarIsOpen = false;

const hamburgerBars = document.querySelectorAll('.bar');
const sidebar = document.querySelector('.sidenav');

let clickCount = 0;

function toggleMenu() {
  sidebar.classList.toggle('overflow-hidden');
  sidebar.classList.toggle('full-width');
  navToggle.classList.toggle('z-index-2');
  clickCount += 1;
  hamburgerBars.forEach((bar) => {
    if (clickCount === 1) {
      if (bar.classList.contains('middle-bar')) {
        bar.classList.toggle('no-opacity');
      } else bar.classList.toggle('change');
    }

    if (clickCount === 2 || clickCount === 4) {
      if (clickCount === 4) {
        if (bar.classList.contains('middle-bar')) {
          bar.classList.remove('no-opacity');
        } else {
          bar.classList.remove('change', 'change-full');
        }
      }

      if (clickCount === 2) {
        if (bar.classList.contains('middle-bar')) {
          bar.classList.toggle('no-opacity');
        } else {
          bar.classList.toggle('change-full');
          bar.classList.toggle('change');
        }
      }
    }

    if (clickCount === 3) {
      if (bar.classList.contains('middle-bar')) {
        bar.classList.toggle('no-opacity');
      } else {
        bar.classList.toggle('change-full');
        bar.classList.toggle('change');
      }
    }
  });
  if (clickCount === 4) {
    clickCount = 0;
  }
}
// Listener for hamburger interaction
navToggle.addEventListener('click', () => {
  if (!sidebarIsOpen) sidebarIsOpen = true;
  else sidebarIsOpen = false;
  toggleMenu();
});
// Fixes the hamburger and modal overlay when the menu is
// open and the screen resizes to Desktop size
window.addEventListener('resize', () => {
  if (window.innerWidth > 677 && sidebarIsOpen) {
    sidebarIsOpen = false;
    toggleMenu();
  }
});