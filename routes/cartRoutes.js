import {addNewCart, getCart, deleteCart, deleteCartByCartItem } from '../controllers/cartController';

const routes = (app) => {
    app.route('/cart')
        // get cart
        .get(getCart)

        // post new cart
        .post(addNewCart);

    app.route('/cart/:CartID')
        //delete cart with cartID
        .delete(deleteCart);

    app.route('/:CartID/cartItem')
        // delete cart with cartItem
        .delete(deleteCartByCartItem)
}

export default routes;

