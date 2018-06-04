/// <reference path='helper.ts'/>
console.log('navigation.ts');
interface INavLink {
    name: string;
    link: string;
}

class Nav {
    private _name: string;
    private _navs: INavLink[];

    private _template: string | undefined;
    private _module: HTMLElement | null;
    constructor(name: string, navs: INavLink[]) {
        this._navs = navs;
        this._name = name;
        this._cacheDOM();
    }
    private async _cacheDOM() {
        this._module = document.getElementById(this._name);
        this._template = await Helper.getHTMLTemplate(this._name);

        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById(this._name);

            this._bindEvents();
            this._render();
        }
    }
    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    private _render() {
        // const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
    }
    private _urlChanged(e: Event) {
        // tslint:disable-next-line:no-unused-expression
        e;
        this._render();
    }
}
