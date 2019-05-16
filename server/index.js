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

const port = 3001;
const app = express();

const dbRoute = "mongodb://localhost:27017/blog"
mongoose.connect(dbRoute, { useNewUrlParser: true })

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => console.log("connected to the database"));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// app.use(session({
//   secret: 'tralalala',
//   resave: true,
//   saveUninitialized: false,
//   cookie: { secure: true },
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }))

app.use(function (req, res, next) {
  // console.log("CORS")
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use(express.static(__dirname + '/templateLogReg'));
app.use("/posts", postsRouter)
app.use("/todos", todosRouter)
app.use('/auth', authRouter)

app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  console.log(err)
  err.status = 404;
  next(err);
});

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
//   next();
// });

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));