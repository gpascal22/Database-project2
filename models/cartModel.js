import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const cartSchema = new Schema({
    cartID:{
        type: Number
    },
    cartItem:{
        type: String
    },
    cartItemId:{
        type: Number
    }
});