// Creating the navbar element

const navbar = `
<div class="nav">
    <img src="logo.png" class="logo" onclick="openNavBar()">
    <h2 class="navtitle">${document.title}</h2>
</div>
<div class="navmenu" style="transform:translateX(-300px);transition:transform 0.2s ease-out;">
    <a href="calculator.html">Calculator</a>
    <a href="colorgenerator.html">Color Generator</a>
    <a href="stopwatch.html">Stopwatch</a>
    <a href="timer.html">Clock</a>
</div>
`

// The state of whether the navbar is current visible

let navbarshown = false;

// The function that is called when clicking the logo

function openNavBar() {
    navbarshown = !navbarshown;
    
    const transform = (navbarshown ? 'translateX(0px)' : 'translateX(-300px)');
    document.querySelector('.navmenu').style.transform = transform;
    console.log(transform)
};

// Insert everything at the start of the body

document.body.innerHTML = navbar + document.body.innerHTML;