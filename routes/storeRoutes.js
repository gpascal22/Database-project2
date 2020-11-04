import {getStoreItemById, getStoreItemByQuery, getSessionsByStoreItem } from '../controllers/storeItemController';

const routes = (app) => {
    app.route('/StoreItem/:StoreItemID')
        // get storeItemById
        .get(getStoreItemById);

    app.route('/StoreItem')
        // get storeItembyQuery
        .get(getStoreItemByQuery);

    app.route('/StoreItem/:StoreItemID')
        .get(getSessionsByStoreItem);
}

export default routes;

