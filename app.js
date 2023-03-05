const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs  = require('express-handlebars');
const router = require('./routes');
const methodOverride = require('method-override');

//ket noi csdl
const db = require('./config/db');


const port = 4001;
const app = express();

db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b
}
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(methodOverride('_method'));

router(app);



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

