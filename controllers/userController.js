import mongoose from 'mongoose';
import { userSchema } from '../models/userModel';


const User = mongoose.model('User', userSchema);

// Add new user login
export const addNewUserlogin = async(req, res) => {
    const {login, password} = req.body;
    const foundUser = await User.findOne({login, password});
    if(foundUser){
        const accessToken = jwt.sign({user:foundUser}, accessTokenSecret);
        res.send(accessToken);
    } else {
        res.send(403);
    }
}

export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const getUserByID = (req, res) => {
    User.findById(req.params.UserId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const addNewUser = (req, res) => {

    User.create(req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const deleteUser = (req, res) => {
    User.deleteOne({ _id:req.params.UserId}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user'});
    });
}


