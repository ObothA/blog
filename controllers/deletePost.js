const Post = require("../database/models/Post");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs')
const path = require("path");

module.exports = async(req,res) => {
    const id = req.params.id;
    const postId = new ObjectID(id);

    let post = await Post.find({_id: postId});
    const filePath =  path.resolve(__dirname, `../public${post[0].media}`);

    /* delete file */
    try {
        fs.unlinkSync(filePath)
        //file removed
      } catch(err) {
        console.error(err)
    }

    Post.deleteOne({ _id: postId }, (err,res) => {
        if(err){
            console.log(err);
        }
    });
}