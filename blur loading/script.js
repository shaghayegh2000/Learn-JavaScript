const loadText = document.querySelector('.text');
const bg = document.querySelector('.bg');

let load = 0;

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let blur = setInterval(() => {
    load++;

    load > 99 ? clearInterval(blur) : "";

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0 , 100 , 1 , 0)
    bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)}px)`
    // console.log(load)

}, 30);

