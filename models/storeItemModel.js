import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StoreItemSchema = new Schema ({
    storeItemID:{
        type: Number
    },
    storeItem:{
        type: String
    }
});
