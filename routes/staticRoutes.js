const express = require('express');
const { redirectURL } = require('../controllers/REDIRECT.js');

const router = express.Router();

router.get('/:shortid', redirectURL);

module.exports = router;