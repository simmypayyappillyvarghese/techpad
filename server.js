const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
//Uncomment once the route files are created
const routes = require('./controllers');
const session = require('express-session');
const {User,Post,Comment}=require('./models');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const helpers = require('./utils/helpers'); NOT YET USING

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Uncomment once the route files are created
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});