const path = require("path");
const Post = require("../database/models/Post");
const ObjectID = require('mongodb').ObjectID;

module.exports = async(req,res) => { 
    const postId = req.params.postId;

    const post = await Post.find({ _id: new ObjectID(postId)})

    res.render("edit", { post });
}
