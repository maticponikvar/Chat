var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.statics.authenticate = function (username, password, callback) {
  console.log(username)
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

UserSchema.pre('save', function (next) {
  var user = this;
  console.log(user, "line 47")
  if (this.isNew || this.isModified('password')) {
    //console.log(user)
    bcrypt.hash(user.password, 10, function (err, hashPass) {
      if (err) {
        console.log("eline 52")
        return next(err);
      }
      console.log("eline 55")
      user.password = hashPass;
      next();
    })
  }
})

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

UserSchema.set('collection', 'fineUsers');

var User = mongoose.model('User', UserSchema);
module.exports = User;