const Post = require("../database/models/Post");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const commentId = req.params.commentId;
    const postId = req.params.postId;
    let commentsArray;

    Post.find({ _id: postId }, (err, res) => {
        if(err){
            console.log(err)
        } else {
            res[0].comments.map((comment) => {
                id = comment.id.toString();
                if(id === commentId){
                    indexOfComment = res[0].comments.indexOf(comment);
                    // update
                    updateStatus(indexOfComment);
                    
                }
            });
        }
    });

    function updateStatus(index){
        objId = new ObjectID(commentId);
        Post.updateMany({ "comments.id" : objId }, { $set: { "comments.$.status": "approved" } }, (err) => {

        });
    }
}