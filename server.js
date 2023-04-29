const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/date');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const http = require('http');

const app = express();
const port = process.env.PORT || 3001

const server = http.createServer(app);

const sess = {
  secret: 'mySecret',
  cookie: {
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(port, () => console.log(`Now Listening at ${port}!`));
});
