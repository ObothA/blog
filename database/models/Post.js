const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    media:{
        type: String,
        required: false,
    },
    mediaType: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments:{
        type: Array,
        required: true,
        default: []
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;