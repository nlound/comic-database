const express = require('express');
const router = express.Router();
const mongoose = require("../bin/mongo");
const issues = new mongoose.Schema({
  "number": String,
  "title": String,
  "grade": String,
  "uss": Number,
  "ars": Number,
  "language": String,
  "note": String,
  "cover": String
})

var api = mongoose.model('api', issues, 'comics');

router.get('/', function (req, res) {
  res.render("issue");
});

router.get('/add', function (req, res) {
  res.render("newissue");
});

router.get('/list', function (req, res) {
  api.find({}, function (err, issues) {
    res.render('list', {
      issues
    });
  });
});

router.get('/list/edit', function (req, res) {
  res.render("editissue", {
    req: req.query
  });
});

/* Write a new Record */
router.get('/add/execute', function (req, res) {
  var newApi = new api({
    "number": req.query.number,
    "title": req.query.title,
    "grade": req.query.grade,
    "uss": req.query.uss,
    "ars": req.query.ars,
    "language": req.query.language,
    "note": req.query.note,
    "cover": "cover.jpg"
  });

  newApi.save(function (err, book) {
    if (err) return console.error(err);
    res.render("success");
  });

});

module.exports = router;