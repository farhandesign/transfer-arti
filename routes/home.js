const express = require('express');

const homePageTemplate = require('../views/home.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(homePageTemplate());
});

module.exports = router;