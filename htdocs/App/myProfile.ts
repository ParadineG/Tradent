/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfile.ts');

class MyProfile extends Page {

    private _template: string;
    private _module: HTMLElement | null;
    private _button: HTMLButtonElement | null;
   
    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate(`templates/myProfile-template.html`);
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('myProfile');
            console.log(this._module);
            if (this._module) {
                this._button = this._module.querySelector('#editProfile');
            } else {
                console.log("message");

            }
       
        }
        
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _bindEvents() {
        if (this._button){
            this._button.addEventListener('click',this._editProfile);
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _render() {
    }

    private _editProfile() {
        window.location.hash = '#person/self/edit';
    }
}
