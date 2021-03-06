/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfileEdit.ts');

class MyProfileEdit extends Page {

    private _template: string | undefined;
    private _module: HTMLElement | null;
    private _buttonCancel: HTMLButtonElement | null;
    private _buttonSave: HTMLButtonElement | null;
    private _name: HTMLInputElement | null;
    private _description: HTMLTextAreaElement | null;
    private _image: HTMLImageElement | null;
    private _facebook: HTMLInputElement | null;
    private _instagram: HTMLInputElement | null;
    private _twitter: HTMLInputElement | null;
    private _profile: IProfile = {
        name: 'Jana M Saar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
        description: `Hello!
    
        I am Jana from Estonia! I am a graduate of Tallinn University, but still operate a lot of my activities there. I am always open to any kind of item or service, but my interests usually lie in furnishings, decorations, and sports. I am a native speaker of Estonian,  and fluent in Russian and English. I am happy to exchange with, or even just meet students.`,
        facebook: 'facebook.com/holycow',
        instagram: 'instagram.com/holycow',
        twitter: 'twitter.com/holycow'
    };

    constructor() {
        super();
        this._cacheDOM();
    }
    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate(`myProfileEdit`);

        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('myProfileEdit');
            if (this._module) {
                this._buttonCancel = this._module.querySelector('#cancelChanges');
                this._buttonSave = this._module.querySelector('#saveChanges');
                this._name = this._module.querySelector('#profileName');
                this._image = this._module.querySelector('#profileImage');
                this._description = this._module.querySelector('#profileDescription');
                this._facebook = this._module.querySelector('#facebookLink');
                this._instagram = this._module.querySelector('#instagramLink');
                this._twitter = this._module.querySelector('#twitterLink');

                this._bindEvents();
                this._render();
            }
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _bindEvents() {
        if (this._buttonCancel) {
            this._buttonCancel.addEventListener('click', this._cancel.bind(this));
        }
        if (this._buttonSave) {
            this._buttonSave.addEventListener('click', this._save.bind(this));
        }
    }
    // tslint:disable-next-line:prefer-function-over-method
    protected _render() {
        if (this._module) {
            if (this._name) {
                this._name.value = this._profile.name;
            }
            if (this._image) {
                this._image.src = this._profile.image;
            }
            if (this._description) {
                this._description.innerText = this._profile.description;
            }
            if (this._facebook) {
                this._facebook.value = this._profile.facebook;
            }
            if (this._instagram) {
                this._instagram.value = this._profile.instagram;
            }
            if (this._twitter) {
                this._twitter.value = this._profile.twitter;
            }
        }
    }
    private _cancel() {
        window.location.hash = '#person/self';
    }

    private _save() {
        window.location.hash = '#person/self';
    }

}
