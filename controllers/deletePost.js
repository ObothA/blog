const Post = require("../database/models/Post");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const id = req.params.id;
    const postId = new ObjectID(id);

    Post.deleteOne({ _id: postId }, (err,res) => {
        if(err){
            console.log(err);
        }
    });
}