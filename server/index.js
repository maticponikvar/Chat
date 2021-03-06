const authRouter = require("./routers/authRouter")
const mongoose = require("mongoose");
const express = require("express");
const postsRouter = require("./routers/postsRouter")
const todosRouter = require("./routers/todosRouter")
//const postsModel = require("./postsModel");
const bodyParser = require("body-parser");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const path = require("path");

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")))

const dbRoute = "mongodb://localhost/blog"
mongoose.connect(dbRoute, { useNewUrlParser: true })

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => console.log("connected to the database"));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// app.use(function (req, res, next) {
//   // console.log("CORS")
//   // res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Origin", "http://localhost:3000")
//   // res.header('Access-Control-Allow-Credentials', true);
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/posts", postsRouter)
app.use("/api/todos", todosRouter)
app.use('/api/auth', authRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  console.log(err)
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));