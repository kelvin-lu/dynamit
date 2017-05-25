var express = require('express');
var router = express.Router();
var Material = require('../models/Material.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/materials/add', function(req, res, next) {
  var name        = req.body.name,
      description = req.body.description,
      video_url   = req.body.admin_url,
      pdf_url     = req.body.pdf_url,
      other_urls  = req.body.other_urls,
      tags        = req.body.tags;

  if(!tags || typeof tags != "object"){
    tags = [];
  }

  if(!other_urls || typeof other_urls != "object"){
    other_urls = [];
  }

  //Getting and cleaning the data so that we don't pass bad things
  //to mongoose.
  var materialInfo = {
    name           : name,
    description    : description,
    links          : {
       video_url   : video_url,
       pdf_url     : pdf_url,
       other_urls  : other_urls
    },
    tags           : tags
  }

  Material.create(materialInfo, function(err, material){
    if(err) return next(err);
    res.send("DONE");
  })
});

module.exports = router;
