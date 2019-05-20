const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./userModel');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require("bcryptjs")
const router = express.Router();
const withAuth = require('./jwtChecker');
const userModel = require("./userModel");


const secret = 'nepovem';

router.get('/secret', withAuth, function (req, res) {
  res.send('The password is potato');
});

router.use(cookieParser())

router.post('/register', function (req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post('/authenticate', function (req, res) {
  // console.log(req.headers)
  const { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          const username = user.username
          const payload = { email, username };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          // console.log(token, "tokeeen")
          res.cookie('token', token, { httpOnly: true }, { withCredentials: true }).sendStatus(200);
        }
      });
    }
  });
});

router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
  console.log(res.email, req.user, "USER && MAIL")
});

router.get('/signOut', function (req, res) {
  {
    const token = "logoutoukn"
    res.cookie('token', token, { httpOnly: false }, { withCredentials: true }).sendStatus(200);
  }
})

router.get("/users", (req, res) => {
  userModel.find((err, users) => {
    usernames = users.map((user) => user.username)
    console.log(usernames)
    if (err) return res.json({ error: err });
    return res.json({
      usernames: usernames
    });
  });
})

module.exports = router;
