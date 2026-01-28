const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/resume', (req, res) => {
    res.render('resume');
});
router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});
router.get('/contact', (req, res) => {
    res.render('contact');
});


module.exports = router;