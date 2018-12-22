const path = require("path");
const Advert = require("../database/models/Advert");

module.exports = (req, res) => {
    const { media } = req.files;
    const { name } = req.body;
    mediaName = media.name.replace(/ /gi, "_");
    media.name = mediaName;

    if (media) {
        media.mv(path.resolve(__dirname, "../public/adverts", media.name), (error) => {
            if (error) {
                console.log(error);
            } else {
                Advert.create({
                    name,
                    media: `/adverts/${mediaName}`,
                }, (error, post) => {

                    res.redirect("/adverts");
                });
            }
        });
    }

};
