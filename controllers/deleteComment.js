const Post = require("../database/models/Post");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const commentId = req.params.commentId;

    objId = new ObjectID(commentId);
        Post.updateMany({ }, { $pull: { comments: { id: objId } } }, (err) => {
            if(err){
                console.log(err);
            }
        });
}