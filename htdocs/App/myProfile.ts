/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfile.ts');

class MyProfile extends Page {

    private _template: string;
    private _module: HTMLElement | null;
    private _button: HTMLButtonElement | null;
    private _name: HTMLHeadingElement | null;
    private _description: HTMLParagraphElement | null;
    private _image: HTMLImageElement | null;
    private _facebook: HTMLLinkElement | null;
    private _instagram: HTMLLinkElement | null;
    private _twitter: HTMLLinkElement | null;
    private _profile: Profile = {
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
                this._name = this._module.querySelector('#profileName');
                this._image = this._module.querySelector('#profileImage');
                this._description = this._module.querySelector('#profileDescription');
                this._facebook = this._module.querySelector('#facebookLink');
                this._instagram = this._module.querySelector('#instagramLink');
                this._twitter = this._module.querySelector('#twitterLink');
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
        if(this._module){
            if(this._name){
                this._name.innerText = this._profile.name;
            }
            if(this._image){
                this._image.src = this._profile.image;
            }
            if(this._description){
                this._description.innerText = this._profile.description;
            }
            if(this._facebook){
                this._facebook.href = this._profile.facebook;
            }
            if(this._instagram){
                this._instagram.href = this._profile.instagram;
            }
            if(this._twitter){
                this._twitter.href = this._profile.twitter;
            }
            /*let parsePass1 = Helper.parseHTMLString(this._template, '{{name}}', this._profile.name);
            let parsePass2 = Helper.parseHTMLString(parsePass1, '{{image}}', this._profile.image);
            let parsePass3 = Helper.parseHTMLString(parsePass2, '{{description}}', this._profile.description);
            let parsePass4 = Helper.parseHTMLString(parsePass3, '{{facebook}}', this._profile.facebook);
            let parsePass5 = Helper.parseHTMLString(parsePass4, '{{instagram}}', this._profile.instagram);
            let parsePass6 = Helper.parseHTMLString(parsePass5, '{{twitter}}', this._profile.twitter);
            this._module.outerHTML = parsePass6;*/
        }
    }

    private _editProfile() {
        window.location.hash = '#person/self/edit';
    }
}
