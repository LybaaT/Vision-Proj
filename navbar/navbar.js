// Creating the navmenu element

const navmenu = document.createElement('div');
navmenu.classList.add('navmenu');

// All of the links across all pages

navmenu.innerHTML = `
<a href="calculator.html">Calculator</a>
<a href="colorgenerator.html">Color Generator</a>
<a href="stopwatch.html">Stopwatch</a>
<a href="timer.html">Timer</a>`;

navmenu.style.transform = 'translateX(-300px)';
navmenu.style.transition = 'transform 0.2s ease-out';

// The state of whether the navbar is current visible

let navbarshown = false;

// The function that is called when clicking the logo

function openNavBar() {
    navbarshown = !navbarshown;
    
    const transform = (navbarshown ? 'translateX(0px)' : 'translateX(-300px)');
    navmenu.style.transform = transform;
};
const logo = document.querySelector('.logo');
logo.onclick = openNavBar;

// Insert the navmenu after the nav element

const nav = document.querySelector('.nav');
nav.after(navmenu);