const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const todosModel = require("./todosModel");
const router = express.Router()

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.post("/postTodo", (req,res) => {
    console.log(req)
    let data = new todosModel();

    data.todo = req.body.todo;
    //data.content = req.body.content
    data.save(err => {
        if (err) return res.json({error: err });
        return res.json({ success: true });
      })
})

router.get("/", (req, res) => {
    todosModel.find((err, data) => {
      console.log(data)
    if (err) return res.json({error: err });
    return res.json({data: data});
  });
})

module.exports = router;