const Post = require("../database/models/Post");
const mongoose = require("mongoose");

module.exports = (req,res) => {
    const { username, comment} = req.body;
    const id = req.params.id;
    let status = "";
    if(req.session.userId){
        status = "approved";
    } else {
        status = "not-approved"
    }

    console.log(status);

    Post.update({ _id: id }, { $push: { comments: { username, comment, status, id: new mongoose.Types.ObjectId() } } }, (err) => {
        if (err) {
        console.log(err);
        } else {
        req.flash("success", "your comment is noted");
        res.redirect(`/post/${id}`);
        }
    });
}