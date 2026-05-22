const express = require('express');
const { GenerateNewUrl } = require('../controllers/url');
const {checkAuth,restricToLogin}=require("../middlewares/restrictToLogin");
const router = express.Router();

 

router.post('/',GenerateNewUrl);

module.exports = router;