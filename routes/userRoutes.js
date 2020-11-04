import {getUser, getUserByID, addNewUser, deleteUser,addNewUserlogin } from '../controllers/userController'

const authenticate = require('../middleware/auth');

const routes = (app) => {
    // app.router('/')
    //     .get(getSession)
    app.route('/user', authenticate)
        // get user
        .get(getUser)
        
        //post new user
        .post(addNewUser);
    
    app.route('/user/:UserId', authenticate)
        // get user by id
        .get(getUserByID)

        // delete user
        .delete(deleteUser)

    app.route('/user/login', authenticate)
        .post(addNewUserlogin);
   
}

export default routes;
