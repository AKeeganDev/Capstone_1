const topNav = document.querySelector('.top-nav');
// const logo = document.querySelector('.logo');
// const rightLinks = document.querySelector('.right-links');
const navToggle = document.querySelector('.nav-toggle');
// const topBar = document.querySelector('.top-bar');
// const middleBar = document.querySelector('.middle-bar');
// const bottomBar = document.querySelector('.bottom-bar');

window.addEventListener('resize', () => {
  if (window.innerWidth < 678) {
    topNav.classList.add('hidden');
    topNav.classList.remove('flex');
    navToggle.classList.add('hidden');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 677) {
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
    navToggle.classList.add('hidden');
  }
});