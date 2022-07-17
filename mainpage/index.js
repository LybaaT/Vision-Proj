document.querySelectorAll('a').forEach((link) => {
    link.href = 'javascript:void(0);';
    link.onclick = function() {
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

        const selected_iframe = document.getElementById(this.innerText);
        selected_iframe.style.opacity = 1;
        selected_iframe.style.pointerEvents = 'all';
        openNavBar();
    };
})