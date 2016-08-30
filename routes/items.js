var express = require('express');
var router = express.Router();
var Item = require('../models/item.js');

router.get('/:id', function(req, res) {
  var query = Item.find({});
  query.where('listId', req.params.id);
  query.exec( function(err, items) {
    res.json(items);
  });
});

router.post('/', function(req, res) {
  new Item({
    item: req.body.item,
    listId: req.body.listId
  }).save(function(err, item) {
    res.json(item);
  });
});

router.delete('/:id', function(req, res) {
  Item.findById(req.params.id, function(err, item) {
    list.remove();
  });
});

module.exports = router;
