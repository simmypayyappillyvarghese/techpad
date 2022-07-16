const express=require('express');
const path=require('path');
const sequelize=require('./config/connection');
const routes=require('./controllers');
const exphbs=require('express-handlebars');
const session=require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app=express();

//PORT
const PORT = process.env.PORT || 3001;

//FOR APP TO MAINTAIN THE SESSION

const sess={
    secret: 'Super secret secret',
    cookie:{},
    resave:false,
    saveUniniialized:false,
    store: new SequelizeStore({
            db: sequelize
    })
}

//MIDDLEWARES

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
app.use(session(sess));


//CREATE HANDLEBAR OBJECT AND DEFINE TEMPLATE LANGUAGE TO EXPRESS
const hbs=exphbs.create();
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');


sequelize.sync({force:false}).then(app.listen(PORT,()=>{
    console.log(`Listening to the Server at ${PORT}`);
}));



















