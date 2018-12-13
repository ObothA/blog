const path = require("path");
const Post = require("../database/models/Post");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req, res) => {
    const postId = new ObjectID(req.params.postId);
    const { username, title, description, content } = req.body;
    const { mediaFile } = req.files;
    let media;
    let mediaType;
    let updateObject;

    if (mediaFile) {
        mediaFile.mv(path.resolve(__dirname, "../public/posts", mediaFile.name), (error) => {
            if (error) {
                console.log(error);
            } else {
                media = `/posts/${mediaFile.name}`;
                mediaType = mediaFile.mimetype
                updateObject = { username, title, description, content, media, mediaType }
                // and update query goes here
                Post.updateMany( { "_id": postId }, { $set: { "username": username } }, (err) => {
                    if(err){
                        console.log(err);
                    } else {
                        res.redirect("/");
                    }
                });
            }
        });
    } else {
        // query goes here
    }
}