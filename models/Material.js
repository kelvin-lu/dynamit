var mongoose = require('mongoose');

var materialSchema = mongoose.Schema({
  name           : { type : String, required: true},
  description    : { type : String, required: true},
  links          : {
     video_url   : { type : String },
     pdf_url     : { type : String },
     other_urls  : [{ type : String}]
  },
  tags           : [{type : String }]
});

module.exports = mongoose.model('Material', materialSchema);
