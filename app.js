import ActivityCatalogView from './views/listEventsView.js'
import ActivityView from './views/singleEventView.js'

class App {
    constructor() {
        this.routes = {
            '': [
                UserView,
                CatalogView
            ],
            'singleEvent': [
                //NavbarView,
                ActivityView,
            ],
            'listAll': [
                //NavbarView,
                ActivityCatalogView,
            ],
        };


        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }


}

new App();
