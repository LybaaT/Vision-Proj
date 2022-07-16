let navbarshown = false;
function openNavBar() {
    navbarshown = !navbarshown;

    const display = (navbarshown ? 'block' : 'none');
    document.querySelector('.navmenu').style.display = display;
};