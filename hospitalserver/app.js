const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const csrf = require('csurf');
const flash = require('connect-flash');
const Admin = require('./models/admin');
const multer = require('multer');
const cors = require('cors');

const app = express();
const myStore = new SequelizeStore({
  db: sequelize,
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.router');
const authRoutes = require('./routes/auth.router');
const accountantRoutes = require('./routes/accountant.router');
const doctorsRoutes = require('./routes/doctors.router');
const labscientists = require('./routes/labscientists.router');
const nursesRoutes = require('./routes/nurses.router');
const receptionistRoutes = require('./routes/receptionist.router');

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: myStore,
  })
);

app.use(csrfProtection);
app.use(flash());

app.use(authRoutes);
app.use(adminRoutes);
app.use(accountantRoutes);
app.use(doctorsRoutes);
app.use(labscientists);
app.use(nursesRoutes);
app.use(receptionistRoutes);

sequelize.sync();
myStore.sync();

module.exports = app;
