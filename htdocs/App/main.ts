/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
/// <reference path='acquireItem.ts'/>
console.log('main.ts');

class App {
    private _mainNavLinks: INavLink[] = [{name: 'Item', link: '#acquire/item'},
                                        {name: 'Service', link: '#acquire/service'},
                                        {name: 'Item', link: '#provide/item'},
                                        {name: 'Service', link: '#provide/service'}];
    private _personalNavLinks: INavLink[] = [{name: 'My Profile', link: '#person/self/'},
                                    {name: 'My Items', link: '#person/self/items'},
                                    {name: 'Wishlist', link: '#person/self/wish'},
                                    {name: 'Trade History', link: '#person/self/trade'},
                                    {name: 'Messages', link: '#person/self/messages'}];
    private _navLinks: INavLink[] = [];
    private _page: Page;

    constructor() {
        // tslint:disable-next-line:no-unused-expression
        this._page;
        this._navLinks.concat(this._mainNavLinks);
        this._bindEvents();
        this._setup();
        this._urlChanged();
    }
    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    private _setup() {
        if (window.location.hash === '') {
            // window.location.hash = this._mainNavLinks[0].link;
            this._page = new FeaturedPosts();
        }
        const nav = new Nav('mainMenu', this._mainNavLinks);
        // tslint:disable-next-line:no-unused-expression
        nav;
        this._urlChanged();
    }
    private _urlChanged() {
        this._mainNavLinks.forEach(
            (value: INavLink) => {
                if (window.location.hash === value.link) {
                    if (value.link === this._mainNavLinks[0].link) {
                        this._page = new AcquireItem();
                    } else if (value.link === this._mainNavLinks[1].link) {
                        // this._page = new ProductSell(value.link);
                    } else if (value.link === this._mainNavLinks[2].link) {
                        // this._page = new ServiceBuy(value.link);
                    } else if (value.link === this._mainNavLinks[3].link) {
                        // this._page = new ServiceSell(value.link);
                    }
                }
            }
        );
    }
}
const app = new App();
