const URL = require('../models/url');

const redirectURL = async (req, res) => {
    try {
        const { shortid } = req.params;

        const entry = await URL.findOneAndUpdate(
            { shortId: shortid },
            {
                $push: {
                    visitHistory: {
                        visitedAt: new Date()
                    }
                }
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

module.exports = {
    redirectURL,
};