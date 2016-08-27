var express = require('express');
var router = express.Router();
var Card = require('../models/card.js');

router.get('/', function(req, res) {
  var query = List.find({});
  query.where('boardId', req.query.bucketId);
  query.exec( function(err, lists) {
    res.json(lists);
  });
});

router.post('/', function())

module.exports = router;
