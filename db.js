const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb://localhost:27017");                                                     //.envfile
const Todoschema = mongoose.Schema({
    title: string,
    discription: string,
    completed: boolean
})
const todo = mongoose.model('todos', todoschema);
module.exports ={
    todo
}