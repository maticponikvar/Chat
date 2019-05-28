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
  const { password, username } = req.body;
  const user = new User({password, username });
  user.save(function (err) {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post('/authenticate', function (req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, function (err, user) {
    if (err) {
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect username or password'
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
              error: 'Incorrect username or password'
            });
        } else {
          const username = user.username
          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res
          .cookie('token', token, { httpOnly: true }, { withCredentials: true })
          .status(200)
          .json({username : username})
        }
      });
    }
  });
});

router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

router.get('/signOut', function (req, res) {
  {
    const token = "logoutoukn"
    res.cookie('token', token, { httpOnly: false }, { withCredentials: true }).sendStatus(200);
  }
})

router.get("/users", withAuth, (req, res) => {
  userModel.find((err, users) => {
    usernames = users.map((user) => user.username)
    if (err) return res.json({ error: err });
    return res.json({
      usernames: usernames
    });
  });
})

module.exports = router;
