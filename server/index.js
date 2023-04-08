const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware 
app.use(cors());
app.use(express.json());

//routes

//create a todo

app.post("/todos", async(req, res)=>{
    try{
       // console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo);
    }  catch (err){
        console.error(err.message);
    }
})

//get all todo

app.get("/todos", async(req,res)=>{
    try {
        const allTodos = await pool.querry("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo

//update a todo

//delete a todo



app.listen(5000, () => {
    console.log("server started on port on 5000");
});