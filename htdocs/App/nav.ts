/// <reference path='helper.ts'/>
console.log('navigation.ts');

interface INavLink {
    name: string;
    link: string;
}

class Nav {
    private _name: string;
    private _navs: INavLink[];

    private _template: string;
    private _microTemplate: string;
    private _module: HTMLElement | null;
    private _list: HTMLUListElement;

    constructor(name: string, navs: INavLink[]) {
        this._navs = navs;
        this._name = name;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _cacheDOM() {
        this._template = Helper.getHTMLTemplate(`templates/${this._name}-template.html`);
        this._module = document.getElementById(this._name);
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById(this._name);
            if (this._module) {
                const temp = this._module.querySelector('script');
                if (temp) {
                    this._microTemplate = temp.innerText;
                    this._list = this._module.getElementsByTagName('ul').item(0);
                }
            }
        }
    }
    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    private _render() {
        let navLinks = '';
        this._navs.forEach(
            (value: INavLink) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
                const setActive = (window.location.hash === value.link) ? 'active' : '';
                const parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
                navLinks += parsePass3;
            }
        );
        this._list.innerHTML = navLinks;
    }
    private _urlChanged(e: Event) {
        // tslint:disable-next-line:no-unused-expression
        e;
        this._render();
    }
}
