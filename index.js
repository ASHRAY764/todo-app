const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", async function(req, res) {
     const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if (!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
     }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false 
     })
})

app.get("/todo", function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/todo", async function(req, res){
       const updatePayload = req.body;
       const parsedPayload = updateTodo.safeparse(updatePayload);
       if (!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
       }
       await todo.update({
        _id: req.body.id
       }, {
          completed: true
       )}
       res.json({
        msg:"todo marked as completed"
       })
)}

app.listen(3000);
