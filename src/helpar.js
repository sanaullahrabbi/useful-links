export const createList = (category, items) => {
    let div = `<div class="category">`;
    let h2 = `<h2>${category}</h2>`;
    div += h2;
    let ul = `<ul>`;
    items.forEach((item) => {
        let li = `<li class="list-before">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>
            </li>`;
        ul += li;
    });
    ul += `</ul>`;
    div += ul;
    div += `</div>`;
    return div;
};
