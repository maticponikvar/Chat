const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const postsModel = require("./postsModel");
const router = express.Router();
const withAuth = require('./jwtChecker');

router.post("/submitPost", withAuth, async (req, res) => {
  // console.log(req)
  let post = new postsModel();

  console.log(req.body, "req body line 12")
  let author = req.username;
  post.author = author;
  post.permissions = req.body.permissions
  post.title = req.body.title
  post.content = req.body.content;
  await post.save(err => {
    if (err) return res.json({ error: err });
    return res.json({ success: true });
  })
})

router.post("/submitComment", withAuth, (req, res) => {
  // console.log(req.username, "REQBODY coment")
  let author = req.username;
  postsModel.findOne({ _id: req.body.comment.id })
    .then((record) => {
      // console.log(this.author, "REEEEKOOOOORD")
      record.comments.push({ comment: req.body.comment.comment, author: author })
      record.save().then(err => {
        if (err) return res.json({ error: err });
        return res.json({ success: true });
      })
    })
})

router.get("/", withAuth, (req, res) => {
  const username = req.username
  postsModel.find((err, posts) => {
    const result = posts.filter((post) => {
      for (let i = 0; i < post.permissions.length; i++) {
        if (post.permissions[i] === username) {
          return post
        }
      }
    })
    // console.log(result, "result line 48")
    if (err) return res.json({ error: err });
    return res.json({
      username: username,
      posts: result
    });
  });
})

router.post("/deletePost", withAuth, (req, res) => {
  const { id } = req.body;
  console.log(req.body, "bodIDD")
  postsModel.findByIdAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
})

module.exports = router;