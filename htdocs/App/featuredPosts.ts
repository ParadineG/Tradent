/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('FeaturedPosts.ts');

class FeaturedPosts extends Page {
    private _template: string;
    private _module: HTMLElement | null;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate(`templates/featuredPosts-template.html`);
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('main');
        }
    }
    protected _bindEvents() {

    }
    protected _render() {

    }
}
