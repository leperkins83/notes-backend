var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbconfig = require('./config/notes-app.js');
var path = require('path');
var Note = require('./notes_model/notes_schema.js');
console.log('I am listening');

mongoose.connect(dbconfig.url);

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/test', function (req, res) {
    var newNote = new Note();

    newNote.description = req.body.description
    newNote.createdDate = new Date();
    newNote.author = req.body.author

    newNote.save();
    console.log(req.body);
    res.send({
      data: 'Created New Note',
      note: newNote
    })
});

app.listen(1410);
