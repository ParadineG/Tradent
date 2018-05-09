/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfileEdit.ts');

class MyProfileEdit extends Page {

    private _template: string;
    private _module: HTMLElement | null;
    private _buttonCancel: HTMLButtonElement | null;
    private _buttonSave: HTMLButtonElement | null;
    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate(`templates/myProfileEdit-template.html`);
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('myProfileEdit');
            if (this._module){
                this._buttonCancel = this._module.querySelector('#cancelChanges');
                this._buttonSave = this._module.querySelector('#saveChanges');
            }
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _bindEvents() {
        if(this._buttonCancel) {
            this._buttonCancel.addEventListener('click', this._cancel.bind(this));
        }
        if(this._buttonSave) {
            this._buttonSave.addEventListener('click',this._save.bind(this));
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _render() {
    }

    private _cancel() {
        window.location.hash = '#person/self';
    }

    private _save() {
        window.location.hash = '#person/self';
    }


}
