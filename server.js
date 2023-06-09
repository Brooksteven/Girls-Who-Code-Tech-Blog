//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// To Import express-handlebars
const exphbs = require('express-handlebars');
// Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const session = require('express-session');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 60 * 60 * 1000, // expires after 1 hour
    },
    resave: false,
    saveUninitialized: true,
  };
  app.use(session(sess));

  // Inform Express.js to use Handlebars.js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//import sequelize connection
const sequelize = require('./config/connection');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Sever listening on http://localhost:${PORT}`));
});