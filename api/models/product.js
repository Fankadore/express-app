const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  name: {type: String, required: true},
  price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);
