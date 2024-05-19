const sliderContainer = document.querySelector('.Container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const slidesNums = right.querySelectorAll('div').length;

let activeSlideIndex = 0;

left.style.top = `-${(slidesNums - 1) * 100}vh`;

const changeSlide = (dir) => {
    const sliderH = sliderContainer.clientHeight;
    if (dir === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesNums - 1) {
            activeSlideIndex = 0;
        }
    }
    if (dir === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesNums - 1;
        }
    }

    right.style.transform = `translateY(-${(activeSlideIndex * sliderH) + 1}px)`

    left.style.transform = `translateY(${(activeSlideIndex * sliderH) - 1}px)`
}

up.addEventListener('click', () => changeSlide('up'));
down.addEventListener('click', () => changeSlide('down'));