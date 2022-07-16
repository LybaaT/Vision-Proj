let navbarshown = true;
function openNavBar() {
    navbarshown = !navbarshown;

    const transform = (navbarshown ? 'translateX(0px)' : 'translateX(-300px)');
    document.querySelector('.navmenu').style.transform = transform;
};
openNavBar();

setTimeout(function() {
    document.querySelector('.navmenu').style.transition = 'transform 0.2s ease-out';
}, 1);
