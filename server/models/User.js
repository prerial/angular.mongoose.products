var mongoose;
mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    id: String
});

module.exports = mongoose.model('User', UserSchema);
