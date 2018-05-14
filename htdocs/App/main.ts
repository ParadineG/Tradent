/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
/// <reference path='acquireItem.ts'/>
/// <reference path='myProfile.ts'/>
/// <reference path='myProfileEdit.ts'/>
/// <reference path='provideItem.ts'/>
/// <reference path='provideService.ts'/>
console.log('main.ts');

class App {
    private _mainNavLinks: INavLink[] = [{name: 'Item', link: '#acquire/item'},
                                        {name: 'Service', link: '#acquire/service'},
                                        {name: 'Item', link: '#provide/item'},
                                        {name: 'Service', link: '#provide/service'}];
    private _personalNavLinks: INavLink[] = [{name: 'My Profile', link: '#person/self'},
                                             {name: 'My Items', link: '#person/self/items'},
                                             {name: 'Wishlist', link: '#person/self/wish'},
                                             {name: 'Trade History', link: '#person/self/trade'},
                                             {name: 'Messages', link: '#person/self/messages'}];
    private _navLinks: INavLink[] = [];

    private _page: Page;

    constructor() {
        // tslint:disable-next-line:no-unused-expression
        this._page;
        this._navLinks.concat(this._mainNavLinks, this._personalNavLinks);
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

        const personalnav = new Nav('personalMenu', this._personalNavLinks);
        // tslint:disable-next-line:no-unused-expression
        personalnav;
        this._urlChanged();

    }
    private _urlChanged() {
        console.log(window.location.hash);

        if (window.location.hash === this._mainNavLinks[0].link) {
            this._page = new AcquireItem();
        } else if (window.location.hash === this._mainNavLinks[1].link) {
            // this._page = new ProductSell(value.link);
        } else if (window.location.hash === this._mainNavLinks[2].link) {
            // this._page = new ProvideItem();
            this._page = new FeaturedPosts();
        } else if (window.location.hash === this._mainNavLinks[3].link) {
            // this._page = new ProvideService();
            this._page = new FeaturedPosts();
        } else if (window.location.hash === this._personalNavLinks[0].link) {
            this._page = new MyProfile();
        } else if (window.location.hash === this._personalNavLinks[1].link) {
            // this._page = new ProductSell(value.link);
        } else if (window.location.hash === this._personalNavLinks[2].link) {
            // this._page = new ServiceBuy(value.link);
        } else if (window.location.hash === this._personalNavLinks[3].link) {
            // this._page = new ServiceSell(value.link);
        } else if (window.location.hash === '#person/self/edit') {
            this._page = new MyProfileEdit();
        }
    }
}

const app = new App();
