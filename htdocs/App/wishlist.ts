console.log('wishlist.ts');

class Wishlist extends Page {

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
}