const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
      
    },
    shortId: {
        type: String,
        required: true,
    },
    redirectTo: {
        type: String,
        required: true,
    },
    visitHistory: [
        {
            visitedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;