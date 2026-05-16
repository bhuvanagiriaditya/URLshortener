const express = require('express');
const { redirectURL ,getAnalytics} = require('../controllers/REDIRECT.js');

const router = express.Router();

router.get('/:shortid', redirectURL);
// Analytics route
router.get('/analytics/:shortid', getAnalytics);

module.exports = router;