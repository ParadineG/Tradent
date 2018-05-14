"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper;
(function (Helper) {
    console.log('helper.ts');
    // for links
    Helper.getParameterByName = function (name) {
        var url = window.location.href;
        var pureName = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp("[?&]" + pureName + "(=([^&#]*)|&|#|$)");
        var result = regex.exec(url);
        if (!result) {
            console.log('undefined');
            return undefined;
        }
        if (!result[2]) {
            console.log('empty');
            return '';
        }
        console.log(result[0]);
        return decodeURIComponent(result[2].replace(/\+/g, ' '));
    };
    Helper.removeParams = function () {
        window.location.href = window.location.origin + window.location.hash;
    };
    // for templates
    Helper.getHTMLTemplate = function (file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            // tslint:disable-next-line:no-invalid-this
            if (this.readyState === 4 && this.status === 200) {
                // tslint:disable-next-line:no-invalid-this
                templateHTML = this.responseText;
                // console.log(templateHTML);
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    };
    Helper.parseHTMLString = function (target, mustache, content) {
        return target.replace(mustache, content);
    };
})(Helper || (Helper = {}));
/// <reference path='helper.ts'/>
console.log('navigation.ts');
var Nav = /** @class */ (function () {
    function Nav(name, navs) {
        this._navs = navs;
        this._name = name;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Nav.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/" + this._name + "-template.html");
        this._module = document.getElementById(this._name);
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById(this._name);
        }
    };
    Nav.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    Nav.prototype._render = function () {
        // const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
    };
    Nav.prototype._urlChanged = function (e) {
        // tslint:disable-next-line:no-unused-expression
        e;
        this._render();
    };
    return Nav;
}());
console.log('page.ts');
// abstract class for menu pages
var Page = /** @class */ (function () {
    function Page() {
        // tyhi
    }
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._cacheDOM = function () {
        // tyhi
    };
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._bindEvents = function () {
        // tyhi
    };
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._render = function () {
        // tyhi
    };
    return Page;
}());
/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('acquireItem.ts');
var AcquireItem = /** @class */ (function (_super) {
    __extends(AcquireItem, _super);
    function AcquireItem() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    AcquireItem.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/acquireItem-template.html");
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('main');
        }
    };
    AcquireItem.prototype._bindEvents = function () {
    };
    AcquireItem.prototype._render = function () {
    };
    return AcquireItem;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
console.log('FeaturedPosts.ts');
var FeaturedPosts = /** @class */ (function (_super) {
    __extends(FeaturedPosts, _super);
    function FeaturedPosts() {
        var _this = _super.call(this) || this;
        _this._posts = [];
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    FeaturedPosts.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/featuredPosts-template.html");
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('posts');
            if (this._module) {
                var temp = this._module.querySelector('script');
                if (temp) {
                    this._microTemplate = temp.innerText;
                }
                this._list = this._module.querySelector('#featured-posts');
            }
        }
    };
    FeaturedPosts.prototype._bindEvents = function () {
    };
    FeaturedPosts.prototype._render = function () {
        var _this = this;
        if (this._list) {
            var data = Helper.getHTMLTemplate("data/featuredPosts.php");
            this._posts = JSON.parse(data);
            var dataHTML_1 = '';
            this._posts.forEach(function (value) {
                var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{cardTitle}}', value.name);
                var parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardLink}}', "photos/" + value.photo);
                var parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardDescription}}', value.description);
                dataHTML_1 += parsePass3;
            });
            this._list.innerHTML = dataHTML_1;
        }
    };
    return FeaturedPosts;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfile.ts');
var MyProfile = /** @class */ (function (_super) {
    __extends(MyProfile, _super);
    function MyProfile() {
        var _this = _super.call(this) || this;
        _this._profile = {
            name: 'Jana M Saar',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
            description: "Hello!\n    \n        I am Jana from Estonia! I am a graduate of Tallinn University, but still operate a lot of my activities there. I am always open to any kind of item or service, but my interests usually lie in furnishings, decorations, and sports. I am a native speaker of Estonian,  and fluent in Russian and English. I am happy to exchange with, or even just meet students.",
            facebook: 'facebook.com/holycow',
            instagram: 'instagram.com/holycow',
            twitter: 'twitter.com/holycow'
        };
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    MyProfile.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/myProfile-template.html");
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
    };
    // tslint:disable-next-line:prefer-function-over-method
    MyProfile.prototype._bindEvents = function () {
        if (this._button) {
            this._button.addEventListener('click', this._editProfile);
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    MyProfile.prototype._render = function () {
        if (this._module) {
            if (this._name) {
                this._name.innerText = this._profile.name;
            }
            if (this._image) {
                this._image.src = this._profile.image;
            }
            if (this._description) {
                this._description.innerText = this._profile.description;
            }
            if (this._facebook) {
                this._facebook.href = this._profile.facebook;
            }
            if (this._instagram) {
                this._instagram.href = this._profile.instagram;
            }
            if (this._twitter) {
                this._twitter.href = this._profile.twitter;
            }
        }
    };
    MyProfile.prototype._editProfile = function () {
        window.location.hash = '#person/self/edit';
    };
    return MyProfile;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('myProfileEdit.ts');
var MyProfileEdit = /** @class */ (function (_super) {
    __extends(MyProfileEdit, _super);
    function MyProfileEdit() {
        var _this = _super.call(this) || this;
        _this._profile = {
            name: 'Jana M Saar',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
            description: "Hello!\n    \n        I am Jana from Estonia! I am a graduate of Tallinn University, but still operate a lot of my activities there. I am always open to any kind of item or service, but my interests usually lie in furnishings, decorations, and sports. I am a native speaker of Estonian,  and fluent in Russian and English. I am happy to exchange with, or even just meet students.",
            facebook: 'facebook.com/holycow',
            instagram: 'instagram.com/holycow',
            twitter: 'twitter.com/holycow'
        };
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    MyProfileEdit.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/myProfileEdit-template.html");
        this._module = document.querySelector('main');
        if (this._module) {
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
            }
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    MyProfileEdit.prototype._bindEvents = function () {
        if (this._buttonCancel) {
            this._buttonCancel.addEventListener('click', this._cancel.bind(this));
        }
        if (this._buttonSave) {
            this._buttonSave.addEventListener('click', this._save.bind(this));
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    MyProfileEdit.prototype._render = function () {
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
    };
    MyProfileEdit.prototype._cancel = function () {
        window.location.hash = '#person/self';
    };
    MyProfileEdit.prototype._save = function () {
        window.location.hash = '#person/self';
    };
    return MyProfileEdit;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('provideItem.ts');
var ProvideItem = /** @class */ (function (_super) {
    __extends(ProvideItem, _super);
    function ProvideItem() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    ProvideItem.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/provideItem-template.html");
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('provideItem');
            if (this._module) {
                this._buttonSave = this._module.querySelector('#saveChanges');
            }
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    ProvideItem.prototype._bindEvents = function () {
        if (this._buttonSave) {
            this._buttonSave.addEventListener('click', this._save.bind(this));
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    ProvideItem.prototype._render = function () {
    };
    ProvideItem.prototype._save = function () {
        window.location.hash = '#person/self';
    };
    return ProvideItem;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('provideService.ts');
var ProvideService = /** @class */ (function (_super) {
    __extends(ProvideService, _super);
    function ProvideService() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    ProvideService.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/provideService-template.html");
        this._module = document.querySelector('main');
        if (this._module) {
            this._module.outerHTML = this._template;
            this._module = document.getElementById('provideService');
            if (this._module) {
                this._buttonSave = this._module.querySelector('#saveChanges');
            }
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    ProvideService.prototype._bindEvents = function () {
        if (this._buttonSave) {
            this._buttonSave.addEventListener('click', this._save.bind(this));
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    ProvideService.prototype._render = function () {
    };
    ProvideService.prototype._save = function () {
        window.location.hash = '#person/self';
    };
    return ProvideService;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='nav.ts'/>
/// <reference path='page.ts'/>
/// <reference path='acquireItem.ts'/>
/// <reference path='myProfile.ts'/>
/// <reference path='myProfileEdit.ts'/>
/// <reference path='provideItem.ts'/>
/// <reference path='provideService.ts'/>
console.log('main.ts');
var App = /** @class */ (function () {
    function App() {
        this._mainNavLinks = [{ name: 'Item', link: '#acquire/item' },
            { name: 'Service', link: '#acquire/service' },
            { name: 'Item', link: '#provide/item' },
            { name: 'Service', link: '#provide/service' }];
        this._personalNavLinks = [{ name: 'My Profile', link: '#person/self' },
            { name: 'My Items', link: '#person/self/items' },
            { name: 'Wishlist', link: '#person/self/wish' },
            { name: 'Trade History', link: '#person/self/trade' },
            { name: 'Messages', link: '#person/self/messages' }];
        this._navLinks = [];
        // tslint:disable-next-line:no-unused-expression
        this._page;
        this._navLinks.concat(this._mainNavLinks, this._personalNavLinks);
        this._bindEvents();
        this._setup();
        this._urlChanged();
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            // window.location.hash = this._mainNavLinks[0].link;
            this._page = new FeaturedPosts();
        }
        var nav = new Nav('mainMenu', this._mainNavLinks);
        // tslint:disable-next-line:no-unused-expression
        nav;
        var personalnav = new Nav('personalMenu', this._personalNavLinks);
        // tslint:disable-next-line:no-unused-expression
        personalnav;
        this._urlChanged();
    };
    App.prototype._urlChanged = function () {
        console.log(window.location.hash);
        if (window.location.hash === this._mainNavLinks[0].link) {
            // this._page = new AcquireItem();
            this._page = new FeaturedPosts();
        }
        else if (window.location.hash === this._mainNavLinks[1].link) {
            // this._page = new AquireService();
            this._page = new FeaturedPosts();
        }
        else if (window.location.hash === this._mainNavLinks[2].link) {
            this._page = new ProvideItem();
        }
        else if (window.location.hash === this._mainNavLinks[3].link) {
            this._page = new ProvideService();
        }
        else if (window.location.hash === this._personalNavLinks[0].link) {
            this._page = new MyProfile();
        }
        else if (window.location.hash === this._personalNavLinks[1].link) {
            // this._page = new MyItems();
        }
        else if (window.location.hash === this._personalNavLinks[2].link) {
            // this._page = new Wishlist();
        }
        else if (window.location.hash === this._personalNavLinks[3].link) {
            // this._page = new TradeHistory();
        }
        else if (window.location.hash === this._personalNavLinks[4].link) {
            // this._page = new Messages();
        }
        else if (window.location.hash === '#person/self/edit') {
            this._page = new MyProfileEdit();
        }
    };
    return App;
}());
var app = new App();
console.log('wishlist.ts');
var Wishlist = /** @class */ (function (_super) {
    __extends(Wishlist, _super);
    function Wishlist() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    return Wishlist;
}(Page));
//# sourceMappingURL=app.js.map