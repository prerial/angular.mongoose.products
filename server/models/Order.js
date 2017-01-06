var mongoose;
mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    giftwrap: Boolean,
    products: Array
});

module.exports = mongoose.model('Order', OrderSchema);
