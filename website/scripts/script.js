const nav = document.querySelector('.mobile-nav'),
navMenuBtn = document.querySelector('.nav-menu-btn'),
navCloseBtn = document.querySelector('.nav-close-btn') ,
themeBtn = document.querySelectorAll(".theme-btn");

navMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

navCloseBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle("light");
      themeBtn[j].classList.toggle("dark");
    }
  });
}