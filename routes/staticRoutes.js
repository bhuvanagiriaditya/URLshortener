const express = require('express');
const router = express.Router();

const { redirectURL, getAnalytics } = require('../controllers/REDIRECT.js');
const URL = require('../models/url');

const displayURLS = async function (req, res, next) {
    try {
        if (!req.user) return res.redirect("/login");

        const allurls = await URL.find({createdBy:req.user._id });

        return res.render('index', {
            urls: allurls ,
        });
    } catch (err) {
        next(err);
    }
};

router.get("/", displayURLS);
router.get("/analytics/:shortid", getAnalytics);
router.get("/:shortid", redirectURL);

module.exports = router;