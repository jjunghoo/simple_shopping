function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
function displayItems(items) {
    const container = document.querySelector('.items');
    // const html = items.map(item => createHtmlString(item)).join('');
    // console.log(html);
    container.innerHTML = items.map(item => createHtmlString(item)).join('');
}

function createHtmlString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__descroption">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null) {
        return;
    }
    const filtered = items.filter(item => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}
// main
loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);