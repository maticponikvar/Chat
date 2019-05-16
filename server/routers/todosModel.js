const mongoose = require("mongoose");
const Schema = mongoose.Schema

const todosModel = new Schema( {
    todo: String,
    status: Boolean,
})

todosModel.set('collection', 'todos');

module.exports = mongoose.model("todosModel", todosModel);