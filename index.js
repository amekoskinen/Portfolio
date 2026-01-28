if(process.env.NODE_ENV !=="production"){
    require('dotenv').config({ quiet: true});
}

const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const portfolioRouter = require('./routers/portfolioRouter');
const ExpressError = require('./utils/ExpressError');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/portfolio', portfolioRouter);

app.get('/', (req, res) => {
    res.redirect('/portfolio');
});

app.use((req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})