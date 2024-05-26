const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const List = [];

async function getData() {
    const res = await fetch('https://randomuser.me/api/?results=40');
    const {results} = await res.json();
    result.innerHTML = '';
    results.forEach(user => {
        const li = document.createElement('li');
        List.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="datas">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.phone}</p>
        </div>
        `;
        result.appendChild(li);
    })
}

getData();


filter.addEventListener('input', (e) => filterData(e.target.value));
const filterData = (term) => {
    // console.log(term);
    List.forEach(item => {
        item.innerText.toLowerCase().includes(term.toLowerCase()) ? item.classList.remove('hide') : item.classList.add('hide');
    })
}