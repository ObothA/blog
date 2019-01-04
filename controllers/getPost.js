const Post = require("../database/models/Post");
const Advert = require("../database/models/Advert");

module.exports = async(req,res) => {
    const post = await Post.findById(req.params.id)
    const id = req.params.id;

    // adverts
    let adverts = await Advert.find({});

    res.render("post", {
        post,
        id,
        adverts
    });
};