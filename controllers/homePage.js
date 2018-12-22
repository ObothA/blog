const Post = require("../database/models/Post");
const Advert = require("../database/models/Advert");

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

    let countPosts = 0.0;
    posts.map((post) => {
        if(post.approvalCount > 0){
            countPosts++;
        }
    })

    let adverts = await Advert.find({})

    res.render("index", {
        posts,
        countPosts,
        adverts
    });
};