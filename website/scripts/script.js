const nav = document.querySelector('.mobile-nav'),
navMenuBtn = document.querySelector('.nav-menu-btn'),
navCloseBtn = document.querySelector('.nav-close-btn');

navMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

navCloseBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})