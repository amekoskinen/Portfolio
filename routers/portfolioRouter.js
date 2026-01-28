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
router.post('/contact', (req, res) => {
    // Here you would typically handle the form submission,
    // e.g., save the data to a database or send an email.
    console.log(req.body);
    res.render('contact', { message: 'Thank you for your message!' });
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

module.exports = router;