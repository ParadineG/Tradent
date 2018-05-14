/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('FeaturedPosts.ts');

interface IPost {
    name: string;
    description: string;
    photo: string;
}

class FeaturedPosts extends Page {

    private _posts: IPost[] = [];
    /*= [{name: 'Auto', description: 'Üks Auto', photo: 'temp.JPG'},
                                    {name: 'Taevas', description: 'Üks Taevas', photo: 'temp.JPG'},
                                    {name: 'Taevas2', description: 'Üks Taevas2', photo: 'temp.JPG'},
                                    {name: 'Tilgad', description: 'Üks Tilgad', photo: 'temp.JPG'},
                                    {name: 'Tilk', description: 'Üks Tilk', photo: 'temp.JPG'},
                                    {name: 'TuhmSulps', description: 'Üks TuhmSulps', photo: 'temp.JPG'},
                                    {name: 'TuhmSulps2', description: 'Üks TuhmSulps2', photo: 'temp.JPG'},
                                    {name: 'VeeSulps', description: 'Üks VeeSulps', photo: 'temp.JPG'},
                                    {name: 'VeeSulps2', description: 'Üks VeeSulps2', photo: 'temp.JPG'},
                                    {name: 'VeeT6us', description: 'Üks VeeT6us', photo: 'temp.JPG'}];*/
    private _template: string;
    private _microTemplate: string;
    private _list: HTMLElement | null;
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
            this._module = document.getElementById('posts');
            if (this._module) {
                const temp = this._module.querySelector('script');
                if (temp) {
                    this._microTemplate = temp.innerText;
                }
                this._list = this._module.querySelector('#featured-posts');
            }
        }
    }
    protected _bindEvents() {

    }
    protected _render() {
        if (this._list) {
            const data = Helper.getHTMLTemplate(`data/featuredPosts.php`);
            this._posts = JSON.parse(data) as IPost[];

            let dataHTML = '';
            this._posts.forEach(
                (value: IPost) => {
                    const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{cardTitle}}', value.name);
                    const parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardLink}}', `photos/${value.photo}`);
                    const parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardDescription}}', value.description);
                    dataHTML += parsePass3;
                }
            );
            this._list.innerHTML = dataHTML;
        }
    }
}
