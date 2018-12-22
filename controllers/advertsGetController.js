const Advert = require("../database/models/Advert");

module.exports = async(req, res) => {
    let adverts = await Advert.find({})

    res.render("adverts", {
        adverts
    });
};
