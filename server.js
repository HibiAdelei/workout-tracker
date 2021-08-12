const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// creating Express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const MONGODB_URI = 'mongodb+srv://merrypassword:merrypassword@workoutdb.t2nup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// creating mongoose database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected.');
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});