var mongoose;
mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  category: String,
  description: String,
  name: String,
  price: Number,
  id: String
});

module.exports = mongoose.model('Product', ProductSchema);
