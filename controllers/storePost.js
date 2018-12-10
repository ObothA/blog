const path = require("path");
const Post = require("../database/models/Post");

module.exports = (req,res) => {
    const { media } = req.files;

    if (media) {
        media.mv(path.resolve(__dirname, "../public/posts", media.name), (error) => {
            if(error){
                console.log(error);
            } else {
            Post.create({
                ...req.body,
                media: `/posts/${media.name}`,
                mediaType: media.mimetype
            }, (error, post) => {
                res.redirect("/");
            });
        }
        });
    } else {
        Post.create(req.body, (error, post) => {
            res.redirect("/");
        });
    }
};