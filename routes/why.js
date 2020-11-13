const express = require('express');

const whyTemplate = require('../views/links/why');

const router = express.Router();

router.get('/why-artilytics', (req, res) => {
	res.send(whyTemplate());
});

module.exports = router;
