import mongoose from 'mongoose';
import { StoreItemSchema } from '../models/storeItemModel';
const MongoStore = require('connect-mongo')(session);

const storeItem = mongoose.model('storeItem', StoreItemSchema);

export const getStoreItemById = (req, res) => {
    storeItem.findById(req.params.StoreItemID, (err, storeItem) => {
        if (err) {
            res.send(err);
        }
        res.json(storeItem);
    });
}

export const getStoreItemByQuery = (req, res) => {
    storeItem.find(req.query, (err, storeItem) => {
        if(err){
            res.send(err);
            res.json(storeItem);
        }
    });
}



export const getSessionsByStoreItem = (req, res) => {
    storeItem.findById(req.params.StoreItemID, (err, storeItem) => {
        if (err) {
            res.send(err);
        }
        req.session.numCalls++;
        res.sendStatus(200);
    });
}