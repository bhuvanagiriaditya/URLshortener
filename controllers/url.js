const Url = require('../models/url');
const shortid = require('shortid');

const GenerateNewUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const shortId = shortid.generate();

    await Url.create({
      url,
      shortId,
      visitHistory: [],
      redirectTo: url,
    });

    res.status(201).render('index', {
      id: shortId,
      url: url
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { 
  GenerateNewUrl,

 };