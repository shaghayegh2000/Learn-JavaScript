// $(".dropdownMenu").click(function (e) {
//     e.preventDefault()
//     let index = $(this).index();
//     let currentLi = $('.dropdownMenu').eq(index);
//     $(this).find('.drop').slideToggle(300);
//     let currentDrop = $(`.dropdownMenu:eq(${index - 1}) .drop`);
//     currentDrop.slideUp(300);
// });

// $('main').click(function (e) {
//     e.preventDefault();
//     $('.drop').slideUp(300);
// });


// const lists = document.querySelectorAll('.list');
// const line = document.querySelector('.line');
// const banner = document.querySelector('.banner');

// lists.forEach(list => {
//     list.addEventListener('click', () => {
//         const imgText = list.lastElementChild.textContent;
//         banner.firstElementChild.src = `../assets/images/${imgText}.jpg`;
//         if (imgText == "پرواز خارجی") {
//             banner.firstElementChild.src = `../assets/images/${imgText}.png`;
//         }
//         banner.firstElementChild.alt = `${imgText}`;
//         console.log(list.offsetWidth)
//     })
// });


