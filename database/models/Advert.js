const mongoose = require("mongoose");


const AdvertSchema = new mongoose.Schema({
    name: String,
    media:{
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Advert = mongoose.model("Advert", AdvertSchema);

module.exports = Advert;