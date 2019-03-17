export default class Item extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="shop-component">
            <h1> ${this.attributes.name.value} </h1>
            <h2> Price ${this.attributes.price.value}</h2>
        </div>`;
    }
}

window.customElements.define('shop-item', Item);
