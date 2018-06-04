"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var _this = this;
    console.log('helper.ts');
    var _cacheHTML = new Map();
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
    Helper.getHTMLTemplateOld = function (file) {
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
    Helper.fetchContent = function (file) { return __awaiter(_this, void 0, void 0, function () {
        var response, templateHTML;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(file)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    templateHTML = _a.sent();
                    return [2 /*return*/, templateHTML];
            }
        });
    }); };
    Helper.getHTMLTemplate = function (name) { return __awaiter(_this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!_cacheHTML.has(name)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Helper.fetchContent("templates/" + name + "-template.html")];
                case 1:
                    content = _a.sent();
                    if (content) {
                        _cacheHTML.set(name, content);
                    }
                    else {
                        alert("error");
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/, _cacheHTML.get(name)];
            }
        });
    }); };
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
    }
    Nav.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.getElementById(this._name);
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate(this._name)];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.getElementById(this._name);
                            this._bindEvents();
                            this._render();
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    AcquireItem.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("acquireItem")];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.getElementById('main');
                            this._bindEvents();
                            this._render();
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    FeaturedPosts.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, temp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("featured-posts")];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.getElementById('featured-posts');
                            if (this._module) {
                                temp = this._module.querySelector('script');
                                if (temp) {
                                    this._microTemplate = temp.innerText;
                                }
                                this._list = this._module.querySelector('#main-item-list');
                                this._bindEvents();
                                this._render();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FeaturedPosts.prototype._bindEvents = function () {
    };
    FeaturedPosts.prototype._render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, dataHTML_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._list) return [3 /*break*/, 2];
                        return [4 /*yield*/, Helper.fetchContent("data/featuredPosts.php")];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this._posts = JSON.parse(data);
                            dataHTML_1 = '';
                            this._posts.forEach(function (value) {
                                var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{cardTitle}}', value.name);
                                var parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardLink}}', "photos/" + value.photo);
                                var parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardDescription}}', value.description);
                                dataHTML_1 += parsePass3;
                            });
                            this._list.innerHTML = dataHTML_1;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    MyProfile.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("myProfile")];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
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
                        this._bindEvents();
                        this._render();
                        return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    MyProfileEdit.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("myProfileEdit")];
                    case 1:
                        _a._template = _b.sent();
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
                        return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    ProvideItem.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("provideItem")];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.getElementById('provideItem');
                            if (this._module) {
                                this._buttonSave = this._module.querySelector('#saveChanges');
                                this._bindEvents();
                                this._render();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        return _this;
    }
    ProvideService.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate("provideService")];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.getElementById('provideService');
                            if (this._module) {
                                this._buttonSave = this._module.querySelector('#saveChanges');
                            }
                        }
                        this._bindEvents();
                        this._render();
                        return [2 /*return*/];
                }
            });
        });
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
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    App.prototype._setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nav, personalnav;
            return __generator(this, function (_a) {
                if (window.location.hash === '') {
                    // window.location.hash = this._mainNavLinks[0].link;
                    this._page = new FeaturedPosts();
                }
                nav = new Nav('main-menu', this._mainNavLinks);
                // tslint:disable-next-line:no-unused-expression
                nav;
                personalnav = new Nav('personal-menu', this._personalNavLinks);
                // tslint:disable-next-line:no-unused-expression
                personalnav;
                this._urlChanged();
                return [2 /*return*/];
            });
        });
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