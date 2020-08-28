
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const frontroutes = require('./routes/front');
const backroutes = require('./routes/back');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.set('view engine', 'ejs');
app.set('views','views');

app.use(frontroutes.route);
app.use(backroutes.route);

// Handeling 404
app.use((req,res,next)=>{
    res.render('404');
});

app.listen(3000);