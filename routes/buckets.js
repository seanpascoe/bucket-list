var express = require('express');
var router = express.Router();
var Bucket = require('../models/bucket');

router.get('/', function(req, res) {
  Bucket.find(function(err, buckets) {
    res.json(buckets);
  });
});

router.get('/:id', function(req, res) {
  res.render('bucket');
});

router.post('/', function(req, res) {
  new Bucket({
    title: req.body.title,
    icon_name: req.body.icon_name
  }).save(function(err, bucket) {
    res.json(bucket);
  });
});

module.exports = router;
