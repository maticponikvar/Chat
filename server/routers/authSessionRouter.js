// var express = require('express');
// var router = express.Router();
// var User = require('./userModel');


// //GET route for reading data
// // router.get('/', function (req, res, next) {
// // //   return res.sendFile(path.join(__dirname + '/auth'));
// // return res.send
// // });


// //POST route for updating data
// router.post('/', function (req, res, next) {
//   // confirm that user typed same password twice
//   if (req.body.password !== req.body.passwordConf) {
//     var err = new Error('Passwords do not match.');
//     err.status = 400;
//     res.send("passwords dont match");
//     return next(err);
//   }

//   if (req.body.email &&
//     req.body.username &&
//     req.body.password &&
//     req.body.passwordConf) {

//     var userData = {
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password,
//     }

//     User.create(userData, function (error, user) {
//        if (error) {
//         //console.log("NOT WORKING")
//         return next(error);
//       } else {
//         //console.log(user, "useeeer")
//         req.session.userId = user._id;
//         console.log(req.session,"req.sesssion")
//         //req.session.save();
//         ///return res.redirect('/auth/profile'); 
//          res.send({status: 'successsignup', username : user.username, email: user.email, uid: user._id, cookie: req.session});
//       }
//     });

//   } else if (req.body.logemail && req.body.logpassword) {
//     //console.log("WORKING 2")
//     User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
//       if (error || !user) {
//         var err = new Error('Wrong email or password.');
//         err.status = 401;
//         return next(err);
//       } else {
//         //POŠLI AXIOS POST
//         req.session.userId = user._id;
//         return res.redirect('/profile');
//       }
//     });
//   } else {
//     var err = new Error('All fields required.');
//     err.status = 400;
//     return next(err);
//   }
// })

// // GET route after registering
// router.get('/profile', function (req, res, next) {
//   //const userId = req.body.userId
//     console.info(req.session, "reeeeqqqqq")
//   User.findById(req.session)
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           var err = new Error('Not authorized! Go back!');
//           err.status = 400;
//           return next(err);
//         } else {
//           return res.send({username: user.username, email: user.email, session:req.session})
//         }
//       }
//     });
// })

// // GET for logout logout
// router.get('/logout', function (req, res, next) {
//   if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.redirect('/');
//       }
//     });
//   }
// });

// module.exports = router;