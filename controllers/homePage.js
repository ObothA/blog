const Post = require("../database/models/Post");

module.exports = async(req, res) => {
    let posts = await Post.find({})
    posts = posts.reverse();
    x = [];

    posts.map((post)=>{
        let count = 0;
        post.comments.map((comment) => {
            if(comment.status !== "approved"){
                count++
            }
            
        });
            post.approvalCount = count;
    });

    res.render("index", {
        posts
    });
};