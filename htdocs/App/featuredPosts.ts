/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('FeaturedPosts.ts');

interface IPost {
    title: string;
    description: string;
    link: string;
}

class FeaturedPosts extends Page {

    private _posts: IPost[] = [{title: 'Auto', description: 'Üks Auto', link: 'temp.JPG'},
                                    {title: 'Taevas', description: 'Üks Taevas', link: 'temp.JPG'},
                                    {title: 'Taevas2', description: 'Üks Taevas2', link: 'temp.JPG'},
                                    {title: 'Tilgad', description: 'Üks Tilgad', link: 'temp.JPG'},
                                    {title: 'Tilk', description: 'Üks Tilk', link: 'temp.JPG'},
                                    {title: 'TuhmSulps', description: 'Üks TuhmSulps', link: 'temp.JPG'},
                                    {title: 'TuhmSulps2', description: 'Üks TuhmSulps2', link: 'temp.JPG'},
                                    {title: 'VeeSulps', description: 'Üks VeeSulps', link: 'temp.JPG'},
                                    {title: 'VeeSulps2', description: 'Üks VeeSulps2', link: 'temp.JPG'},
                                    {title: 'VeeT6us', description: 'Üks VeeT6us', link: 'temp.JPG'}];
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
            let data = '';
            this._posts.forEach(
                (value: IPost) => {
                    const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{cardTitle}}', value.title);
                    const parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardLink}}', `photos/${value.link}`);
                    const parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardDescription}}', value.description);
                    data += parsePass3;
                }
            );
            this._list.innerHTML = data;
        }
    }
}
