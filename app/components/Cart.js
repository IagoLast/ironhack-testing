export default class Cart extends HTMLElement {
    constructor() {
        super();
        window.addEventListener('item-clicked', this.onItemClicked.bind(this));
    }

    connectedCallback() {
        this._render();
    }

    onItemClicked({ detail }) {
        this._render();
    }

    _render() {
        this.innerHTML = `
            <aside>
                <h1>Chart:</h1>
                ${this._renderItems()}
                <hr>
                ${this._renderPrice()}
            </aside>`;
    }

    _renderItems() {
        return '';
    }

    _renderPrice() {
        return 'NAN€'
    }
}

window.customElements.define('shop-cart', Cart);
