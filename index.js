import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';

const MongoStore = require('connect-mongo')(session);
import cartRoutes from './routes/cartRoutes';
import storeRoutes from './routes/storeRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const router = express.Router();

const PORT = 8080;
const url = 'mongodb+srv://pascaldb:<password>>@cluster0.2ibm9.mongodb.net/pascaldb?retryWrites=true&w=majority';


let database;

const initDatabase = async() => {
    database = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    if(database){
        app.use(session({
            secret: 'Thisisasecretmessage',
            store: new MongoStore({mongooseConnection: mongoose.connection}),
            resave: true,
            saveUninitialized: true
        }));
        app.use(router);
        console.log('Successfully connected to my DB');
    }else {
        console.log('Error connecting to my DB');
    }
}
initDatabase();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

cartRoutes(router);
storeRoutes(router);
userRoutes(router);
  

app.get('/', (req, res) =>
    res.send(`Your App is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);


