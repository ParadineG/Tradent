console.log('myProfile.ts');

class MyProfile extends Page {

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
}