const path = require("path");
const Post = require("../database/models/Post");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req, res) => {
    const { username, title, description, content, postId } = req.body;
    const  mediaFile  = req.files.media;
    let media;
    let mediaType;
    let updateObject;

    if (mediaFile) {
        mediaFile.mv(path.resolve(__dirname, "../public/posts", mediaFile.name), (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("we have media");
                media = `/posts/${mediaFile.name}`;
                mediaType = mediaFile.mimetype
                updateObject = { username, title, description, content, media, mediaType }
                // and update query goes here
                Post.findByIdAndUpdate( 
                    postId,
                    updateObject,
                    { new: true },
                    (err,x) => {
                        if(err){
                            console.log(err);
                        }
                        res.redirect("/");
                    }
                    );
            }
        });
    } else {
        console.log("no media");
        updateObject = { username, title, description, content }
        // and update query goes here
        Post.findByIdAndUpdate( 
            postId,
            updateObject,
            { new: true },
            (err,x) => {
                if(err){
                    console.log(err);
                }
                res.redirect("/");
            }
            );
    }
}