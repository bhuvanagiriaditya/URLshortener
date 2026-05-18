const express = require('express');
const { GenerateNewUrl } = require('../controllers/url');
const router = express.Router();

 

router.post('/', GenerateNewUrl);

module.exports = router;