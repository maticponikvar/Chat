const mongoose = require("mongoose");
const Schema = mongoose.Schema

const commentModel = new Schema({
    date: { type: Date, default: Date.now },
    comment: String,
    author: String
})

const postsModel = new Schema({
    id: String,
    date: { type: Date, default: Date.now },
    title: String,
    content: String,
    author: String,
    permissions: [String],
    comments: [commentModel]
})

postsModel.set('collection', 'posts');

module.exports = mongoose.model("postsModel", postsModel);