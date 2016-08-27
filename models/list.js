var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var List = new Schema({
  title: {type: String, required: true}
})

module.exports = mongoose.model('List', List);
