const URL = require('../models/url');
const { get } = require('../routes/url-routes');

const redirectURL = async (req, res) => {
    try {
        const { shortid } = req.params;

        const entry = await URL.findOneAndUpdate(
            { shortId: shortid },
            {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
            
            { new: true }
        );

        if (!entry) {
            return res.status(404).render("404");
        }
    
       
       

        return res.redirect(entry.redirectTo);

    } catch (err) {
        console.error("Redirect Error:", err);
        return res.status(500).send("Internal Server Error");
    }
};
// Analytics function
const getAnalytics = async (req, res) => {
    const { shortid } = req.params;

    const result = await URL.findOne({ shortId: shortid });

    return res.render('index');
};

module.exports = {
    redirectURL,
    getAnalytics,
};