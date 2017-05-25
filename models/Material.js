var mongoose = require('mongoose');

var page_size = 10;

var materialSchema = mongoose.Schema({
  name           : { type : String, required: true, unique: true},
  description    : { type : String, required: true},
  links          : {
     video_url   : { type : String },
     pdf_url     : { type : String },
     other_urls  : [{ type : String}]
  },
  tags           : [{type : String }]
});

materialSchema.statics.getMaterialsPage = function(page, cb){
  
}

module.exports = mongoose.model('Material', materialSchema);
