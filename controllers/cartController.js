import mongoose from 'mongoose';
import { cartSchema } from '../models/cartModel';

const Cart = mongoose.model('Cart', cartSchema);

export const addNewCart = (req, res) => {
    let newCart = new Cart(req.body);

    newCart.save((error, cart) => {
        if(error){
            res.status(500).send("There was a problem adding new cart");
        }
        res.json(cart);
    });
}

export const getCart = (req, res) => {
    Cart.find({}, (error, cart) => {
        if(error){
            res.status(500).send("There was a problem finding cart");
        }
        res.json(cart);
    });
}

export const deleteCart = (req, res) => {
    Cart.deleteOne({ _id:req.params.cartID}, (error, cart) => {
        if(error){
            res.status(500).send("There was a problem deleting");
        }
        res.json({message: `Successfully deleted Cart`});
    });
}

export const deleteCartByCartItem = (req, res) => {
    Cart.deleteOne(req.params.cartItem, (error, cart) => {
        if(error){
            res.status(500).send("There was a problem deleting");
        }
        res.json({message: `Successfully deleted Cart`});
    });
}