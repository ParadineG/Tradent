/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('acquireItem.ts');

class AcquireItem extends Page {
    private _template: string | undefined;
    private _module: HTMLElement | null;

    constructor() {
        super();
        this._cacheDOM();
    }
    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate(`acquireItem`);

        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('main');

            this._bindEvents();
            this._render();
        }
    }
    protected _bindEvents() {

    }
    protected _render() {

    }
}
