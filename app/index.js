import './components/Item.js';
import './components/Cart.js';

(async () => {
    const items = await fetchItems();
    renderItemList(items);
})()


async function fetchItems() {
    const raw = await fetch('./items.json');
    return await raw.json();
}


function renderItemList(items) {
    const $main = document.querySelector('main');
    items.forEach(item => {
        const $item = document.createElement('shop-item');
        $item.setAttribute('name', item.name);
        $item.setAttribute('price', item.price);
        $item.addEventListener('click', _onItemClicked);
        $main.appendChild($item);
    });
}


function _onItemClicked(event) {
    const $item = event.currentTarget;

    window.dispatchEvent(new CustomEvent('item-clicked', {
        detail: {
            name: $item.getAttribute('name'),
            price: parseFloat($item.getAttribute('price')),
        }
    }))
}
