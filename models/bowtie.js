var mongoose = require('mongoose');

var BowtieSchema = new mongoose.Schema( {
  id           : Number,
  material     : String,
  pattern      : String,
  style        : String,
  image_url    : String,
  retail_price : Number,
  description  : String
})

var Bowtie = mongoose.model('Bowtie', BowtieSchema);

// make this available to our other files
module.exports = Bowtie;
