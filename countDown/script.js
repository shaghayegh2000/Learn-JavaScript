const days = document.querySelector('.day');
const hour = document.querySelector('.hour');
const mins = document.querySelector('.min');
const second = document.querySelector('.second');
const newYears = '27 June 2025';

const countDown = () => {
    const newYear = new Date(newYears);
    const currentDate = new Date();
    console.log(newYear - currentDate)
    const seconds = (newYear - currentDate) / 1000;
    const day = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const min = Math.floor(seconds / 60) % 60;
    const secnd = Math.floor(seconds % 60)
    days.innerText = day;
    hour.innerText = timeFormat(hours);
    mins.innerText = timeFormat(min);
    second.innerText = timeFormat(secnd);
}
setInterval(countDown, 1000);

const timeFormat = (time) => {
    return time < 10 ? (`0${time}`) : time;
}