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

// JS for the testimonial DIVs

const clients = [
  {
    photo: '../img/speaker_01.png',
    quote: '"True Genius!"',
    name: 'John Doe',
    title: 'Executive Doe',
    dialogue: '"Some markup text complimenting Aaron\'s incredible web-design skills. Cheers to whoever reads this!"',
  },
  {
    photo: '../img/speaker_02.png',
    quote: '"Remarkable.."',
    name: 'Jon D\'oh',
    title: 'Super D\'oh',
    dialogue: '"I would bet both my turtleneck AND my matching-color computer chair on his work. Aaron is a true professional"',
  },
  {
    photo: '../img/speaker_03.png',
    quote: '"WOW!"',
    name: 'Song Dough',
    title: 'Chief Operating Doe',
    dialogue: ' "There are legends.. and then there is Aaron. Aaron is so cool!"',
  },
  {
    photo: '../img/speaker_04.png',
    quote: '"Exclamatory Words!"',
    name: 'Jane Doe',
    title: 'Not Related to John Doe',
    dialogue: '"Though me and John are not related or affiliated in any way, we do agree that Aaron is great!"',
  },
  {
    photo: '../img/speaker_05.png',
    quote: '"Superb"',
    name: 'Jayne (The Doe) Dohh',
    title: 'High-level Occupation',
    dialogue: ' "If I could launch the site that Aaron made in 20 domains I would, but the world can not handle that much perfection."',
  },
  {
    photo: '../img/speaker_06.png',
    quote: '"Sweet Beans!"',
    name: 'Jonathan D\'d\'doe',
    title: 'The First 2 "D"s Are Silent',
    dialogue: '"Thank you for reading all of these. I hope they made you laugh!"',
  },
];

function fillInClients() {
  const clientContainer = document.querySelector('#container');
  let counter = 1;
  clients.forEach((client) => {
    const markup = `
      <div class="testimonial client${counter}">
        <div class="picture"></div>
        <div class="client-dialogue">
            <div class="lead-quote">${client.quote}</div>
            <div class="name">${client.name}</div>
            <div class="occupation">${client.title}</div>
            <div class="dialogue">${client.dialogue}</div>
        </div>
      </div>`;
    counter += 1;
    clientContainer.innerHTML += markup;
  });
}

fillInClients();