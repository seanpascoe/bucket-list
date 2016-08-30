var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  item: {type: String, required: true},
  listId: {type: String, required: true}
})

module.exports = mongoose.model('Item', Item);
