var express = require('express');
var router = express.Router();
var List = require('../models/list.js');

router.get('/', function(req, res) {
  var query = List.find({});
  query.where('bucketId', req.query.bucketId);
  query.exec( function(err, lists) {
    res.json(lists);
  });
});

router.post('/', function(req, res) {
  new List({
    title: req.body.title,
    bucketId: req.body.bucketId
  }).save(function(err, list) {
    res.json(list);
  });
});

module.exports = router;
