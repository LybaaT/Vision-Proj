const setBg1 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color1').style.backgroundColor = "#" + randomColor;
    color1.innerHTML = "<h1>#" + randomColor + "</h1>";
    }
    genNew.addEventListener("click", setBg1);
    setBg1();

const setBg2 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color2').style.backgroundColor = "#" + randomColor;
    color2.innerHTML = "<h1>#" + randomColor + "</h1>";
    }
    genNew.addEventListener("click", setBg2);
    setBg2();

const setBg3 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color3').style.backgroundColor = "#" + randomColor;
    color3.innerHTML = "<h1>#" + randomColor + "</h1>";
    }
    genNew.addEventListener("click", setBg3);
    setBg3();

const setBg4 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color4').style.backgroundColor = "#" + randomColor;
    color4.innerHTML = "<h1>#" + randomColor + "</h1>";
    }

    genNew.addEventListener("click", setBg4);
    setBg4();

const setBg5 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color5').style.backgroundColor = "#" + randomColor;
    color5.innerHTML = "<h1>#" + randomColor + "</h1>";
    }
    
    genNew.addEventListener("click", setBg5);
    setBg5();