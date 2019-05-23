const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const postsModel = require("./postsModel");
const router = express.Router();
const withAuth = require('./jwtChecker');
// const checkToken = require ("./authRouter")

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.post("/submitPost", withAuth, async (req, res) => {
  // console.log(req)
  let post = new postsModel();

  console.log(req.body, "req body line 16")
  let author = req.username;
  // let permissions = req.body.permissions && req.body.permissions.split(' ');
  post.author = author;
  post.permissions = req.body.permissions
  // post.author = req.body.author;
  post.title = req.body.title
  post.content = req.body.content;
  //post.comments = req.body.comments
  // console.log(req.body)
  await post.save(err => {
    if (err) return res.json({ error: err });
    return res.json({ success: true });
  })
})

router.post("/submitComment", withAuth, (req, res) => {
  console.log(req.username, "REQBODIII coment")
  let author = req.username;
  postsModel.findOne({ _id: req.body.comment.id })

    .then((record) => {
      console.log(this.author, "REEEEKOOOOORD")
      record.comments.push({ comment: req.body.comment.comment, author: author })
      record.save().then(err => {
        if (err) return res.json({ error: err });
        return res.json({ success: true });
      })
    })
})

router.get("/", withAuth, (req, res) => {
  // console.log(req.cookies.token, "req Header")
  // console.log(req.email, req.username, "MAIL & USERNAME in router")
  // const email = req.email;
  const username = req.username
  // console.log(username)
  postsModel.find((err, posts) => {
    const result = posts.filter((post) => {
      for (let i = 0; i < post.permissions.length; i++) {
        // console.log(post.permissions[i] , "post permission")
        if (post.permissions[i] === username) {
          return post
        }
      }
    })
    console.log(result, "result line 58")
    if (err) return res.json({ error: err });
    return res.json({
      // email: email,
      username: username,
      posts: result
    });
  });
})

router.post("/deletePost", withAuth, (req, res) => {
  // console.log(req, "74")
  const { id } = req.body;
  console.log(req.body, "bodIDD")
  postsModel.findByIdAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
})

module.exports = router;