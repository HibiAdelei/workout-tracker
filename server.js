const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/apiRoutes.js");


const PORT = process.env.PORT || 3001;

// Create Express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Create mongoose database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});