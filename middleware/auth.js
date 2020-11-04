import jwt from 'jsonwebtoken';

const accessTokenSecret = "ThisisasecretMessage";
export const authenticate = (async(req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const jwToken = authHeader.split(' ')[1];
            const user = jwt.verify(jwToken, accessTokenSecret);
            req.user = user;
        }
    }
    catch(err){
        res.send(403);
    }
    next();
});



