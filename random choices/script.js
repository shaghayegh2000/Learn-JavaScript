const Tags = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
        // setTimeout(() => {
        //     e.target.value = "";
        // }, 200);

        // random();
        pickRand();
    }
})

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    Tags.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        Tags.appendChild(tagEl);
    })
}

// const random = () => {
//     const times = 30;
//     const interval = setInterval(() => {
//         const randTag = pickRand();
//         // highlight(randTag);
//         randTag.classList.add('change');

//         setTimeout(() => {
//             // unhighlight(randTag);
//             randTag.classList.remove('change');
//         }, 200);
//     }, 200);
// }

const pickRand = () => {
    // const tags = document.querySelectorAll('.tags')
    return Tags[Math.floor(Math.random() * Tags.length)];
}

// const highlight = (tag) => {
//     tag.classList.add('change');
// }

// const unhighlight = (tag) => {
//     tag.classList.remove('change');
// }

