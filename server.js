const express = require('express');
const mongoose = require("mongoose");
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require("method-override") ////usado para poder hacer el delete de las notas en html
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Initializations
const app = express();
mongoose.connect("mongodb://localhost:27017/ModGradDatabase", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.set('useFindAndModify', false);
require('./config/passport');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',     ///El archivo main.hbs es una plantilla 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'), ///pedazos de codigo html que podemos importar a otros archivos html    
    extname: '.hbs',
    
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false})); //convierte los datos de los formularios en un objeto json
app.use(methodOverride('_method'));
app.use(session({
    secret: 'albe1974#$AIsa',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; ////guarda el usuario que ha ingresado!! 
    next();
});

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/modalities.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));
//app.use("/static", express.static("public"));
//app.use(express.static("public"));

//


//console.log('en server.js');

module.exports = app;

