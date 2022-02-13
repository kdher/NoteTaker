const express = require("express");
const path = require("path");
const api = require('./Routes/Api');

 
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", api);


// GET Route for Homepage
app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );

 // GET Route for Notes page 
app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
  );


app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
  });