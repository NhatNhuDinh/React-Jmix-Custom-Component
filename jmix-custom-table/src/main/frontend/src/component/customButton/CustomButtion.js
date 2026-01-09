export class CustomButtion extends HTMLElement {
    constructor() {
        super();
        this.test = undefined;
        this.emitEvent = this._emitEvent.bind(this);
    }

    _emitEvent() {
        const event = new CustomEvent('speak', {
            detail: {
                message: 'Hello, world!',
            },
        });
        this.dispatchEvent(event);
    }

    connectedCallback() {
        this.el = document.createElement('button');
        this.el.innerText = 'Say hi';
        this.el.addEventListener('click', this.emitEvent);
        this.appendChild(this.el);
    }

    disconnectedCallback() {
        this.el.removeEventListener('click', this.emitEvent);
    }
}

customElements.define('custom-button', CustomButtion);
