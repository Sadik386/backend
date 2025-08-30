// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

const todoSchema = new mongoose.Schema({
    title: { type: String, default: "My Todo" },
    desc: String,
    isDone: Boolean,
    days: Number
})

const Todo = mongoose.model('Todo', todoSchema);

app.get('/', (req, res) => {

    const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
    todo.save() 
    res.send('Hello World!')
})

app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})