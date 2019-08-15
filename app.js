var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
var server = require('http').createServer(app);

var db = require('./models/db-config');
mongoose.connect(db.url,{useNewUrlParser: true},function(err,data){
  if(err)throw err;
  console.log("Database connect")
});



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);


server.listen(process.env.PORT || '3000');