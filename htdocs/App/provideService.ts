/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('provideService.ts');

class ProvideService extends Page {

    private _template: string | undefined;
    private _module: HTMLElement | null;
    private _buttonSave: HTMLButtonElement | null;

    constructor() {
        super();
        this._cacheDOM();
    }
    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate(`provideService`);

        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('provideService');
            if (this._module) {
                this._buttonSave = this._module.querySelector('#saveChanges');
            }
        }
        this._bindEvents();
        this._render();
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _bindEvents() {
        if(this._buttonSave) {
            this._buttonSave.addEventListener('click', this._save.bind(this));
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _render() {
    
    }

    private _save() {
        window.location.hash = '#person/self';
    }

}
