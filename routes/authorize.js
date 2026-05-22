const express = require('express');
const router = express.Router();
const {handlefree}=require("../controllers/handlefreeuser");

router.post('/',handlefree);
module.exports = router;