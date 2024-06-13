const parvazMenu = document.querySelector('.parvaz-menu'),
    moreBtn = document.querySelector('.more'),
    moreList = document.querySelector('.header-navbar-item7'),
    menuBox = document.querySelector('.header-navbar-item1');

moreList.addEventListener('click', (e) => {
    e.preventDefault();
    moreBtn.classList.toggle('display');
})

menuBox.addEventListener('click', (e) => {
    e.preventDefault();
    parvazMenu.classList.toggle('display');
})

if (moreBtn.classList == display || parvazMenu.classList == display) {
    window.addEventListener('click', () => {
        moreBtn.classList.remove('display')
    })
}