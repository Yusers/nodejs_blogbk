const express = require('express');
const { engine } = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

// access public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// XMLHttpsRequest, fetch, axios,

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// method
// instance app and if Path matches a function handler will execute\
route(app);

app.listen(port);