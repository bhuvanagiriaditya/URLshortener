const express = require('express');
const {handlesignUp} = require('../controllers/handleSignup');
const router = express.Router();

router.post('/',handlesignUp);
module.exports = router;
