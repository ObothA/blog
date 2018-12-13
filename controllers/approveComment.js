const Post = require("../database/models/Post");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const commentId = req.params.commentId;
    const postId = req.params.postId;

        objId = new ObjectID(commentId);
        Post.updateMany({ "comments.id" : objId }, { $set: { "comments.$.status": "approved" } }, (err) => {

        });

}