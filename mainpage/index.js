let hash = location.hash;
if (hash === '') {
    hash = '#';
}
hash = decodeURI(hash.substr(1));
if (hash === '') {
    hash = 'Gizmo Tools For You';
};

let page = [
    'Gizmo Tools For You',
    'Calculator',
    'Color Generator', 
    'Stopwatch', 
    'Clock', 
    'To-do List', 
    'Currency Converter', 
    'About us'
].indexOf(hash); 

if (page !== 0) {
    document.querySelectorAll('a')[page].click();
    openNavBar();
}


project_name = 'Vision';
document.querySelectorAll('a').forEach((link) => {
    link.href = 'javascript:void(0);';
    link.onclick = function() {
        console.log(this.innerText);
        document.querySelectorAll('a').forEach((link) => {
            link.style.opacity = 1;
            link.style.pointerEvents = 'all';
        });
        
        this.style.pointerEvents = 'none';
        this.style.opacity = 0.5;

        document.querySelectorAll('iframe').forEach((iframe) => {
            iframe.style.opacity = 0;
            iframe.style.pointerEvents = 'none';
        });

        document.querySelector('.navtitle').innerText = this.innerText;
        document.title = project_name + ' - ' + this.innerText;

        location.hash = this.innerText;

        const selected_iframe = document.getElementById(this.innerText);
        if (selected_iframe !== null) {
            selected_iframe.style.opacity = 1;
            selected_iframe.style.pointerEvents = 'all';
        } else {
            alert("This tool doesn't exist.");
        }
        
        if (document.querySelector('.navmenu').style.transform == "translateX(0px)") {
            openNavBar();
        }
        window.scrollTo(0, 0)
    };
});