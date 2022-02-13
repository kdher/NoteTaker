const express = require('express');
const fs = require('fs');
const shortid = require('shortid');
let notes = require("../db/db.json")

const app = express();

// GET Route for Notes
  app.get("/api/notes", (req, res) => {
    return res.json(notes)
  })
// POST Route for Notes
  app.post("/api/notes", (req, res) => {
    const CreatenewNote = {
      id: shortid.generate(),
      title: req.body.title,
      text: req.body.text
    }
    notes.push(CreatenewNote)
    fs.writeFile("./db/db.json", JSON.stringify(notes),  
    (err, data) => {
      if (err) throw err;

      console.log("New Note added")
      res.send(notes);
    });
  })

   // DELETE Route for a specific id
  app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    notes = notes.filter(note => note.id !== noteId);
    console.log(notes);
    fs.writeFile("./db/db.json", JSON.stringify(notes),  
    (err, data) => {
      if (err) throw err;

  // Respond to the DELETE request
      console.log("Note has been deleted")
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });


  });
module.exports = app;