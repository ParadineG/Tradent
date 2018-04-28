/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('productBuy.ts');

class ProductBuy extends Page {
    private _name: string;
    private _template: string;
    private _module: HTMLElement | null;

    constructor(name: string) {
        super(name);
        this._name = name;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate(`templates/${this._name}-template.html`);
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById(this._name);
        }
    }
    protected _bindEvents() {

    }
    protected _render() {

    }
}
