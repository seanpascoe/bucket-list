var express = require('express');
var router = express.Router();
var Bucket = require('../models/bucket');
var List = require('../models/list');
var Item = require('../models/item');

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

router.delete('/:id', function(req, res) {
  Bucket.findById(req.params.id, function(err, bucket) {
    bucket.remove();
    List.find({bucketId: req.params.id}, function(err, lists) {
      lists.forEach(function(err, index) {
        var list = lists[index];
        Item.find({listId: list._id}).remove().exec();
        list.remove();
      });
    });
    res.status(200).send({success: true});
  });
});

module.exports = router;
