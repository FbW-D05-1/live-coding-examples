const mongoose = require("mongoose");

const picturesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: String,
});

const Picture = mongoose.model("Picture", picturesSchema);

module.exports = Picture;
