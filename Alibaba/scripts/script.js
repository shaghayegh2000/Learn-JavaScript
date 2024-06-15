const parvazMenu = document.querySelector('.parvaz-menu'),
    moreBtn = document.querySelector('.more'),
    moreList = document.querySelector('.header-navbar-item7'),
    menuBox = document.querySelector('.header-navbar-item1'),
    html = document.querySelector('html');

moreList.addEventListener('click', (e) => {
    e.preventDefault();
    moreBtn.classList.toggle('display');
    parvazMenu.classList.remove('display');
})

menuBox.addEventListener('click', (e) => {
    e.preventDefault();
    parvazMenu.classList.toggle('display');
    moreBtn.classList.remove('display');
})
