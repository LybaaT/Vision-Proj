function generateNewColors() {
    for (let i = 1; i <= 5; i ++) {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart('0', 6);
        const element = document.getElementById('color' + i);
        element.style.backgroundColor = randomColor;
        element.innerHTML = `<h1>${randomColor}</h1>`;
    };
};

genNew.onclick = generateNewColors;
generateNewColors();