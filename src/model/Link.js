const mongoose = require('mongoose');


const Link = mongoose.model('Link', 
    {
        name: String,
        email: String,
        edad: Number,

    }
);

module.exports = Link
