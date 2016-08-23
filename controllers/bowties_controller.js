var Bowtie = require('../models/bowtie');

module.exports = {
  index   : index,
  create  : create,
  show    : show,
  update  : update,
  destroy : destroy
}

function index(req, res, next) {
  console.log("Fetchin those bowties");

  Bowtie.find({}, function(err, bowties) {
    if (err) next(err);

    res.json(bowties);
  });
}

function create(req, res, next) {
  console.log('This is a new bowtie!!!');

  var newBowtie = new Bowtie(req.body);
  newBowtie.save(function(err, savedBowtie) {
    if (err) next(err);

    res.json(savedBowtie);
  });
}

function show(req, res, next) {
  console.log('this is the bowtie you\'re looking for');

  Bowtie.findOne({id: req.params.id}, function(err, bowtie) {
    if (err || !bowtie) next(err);

    res.json(bowtie);
  });
}

function update(req, res, next) {
  console.log('updating your bowtie');

  Bowtie.findOne({id: req.params.id}, function(err, bowtie) {
    if(err || !result) next(err);

    if (req.body.material) bowtie.material         = req.body.material;
    if (req.body.pattern) bowtie.pattern           = req.body.pattern;
    if (req.body.style) bowtie.style               = req.body.style;
    if (req.body.image_url) bowtie.image_url       = req.body.image_url;
    if (req.body.retail_price) bowtie.retail_price = req.body.retail_price;
    if (req.body.description) bowtie.description   = req.body.description;

    bowtie.save(function(err, updatedBowtie) {
      console.log('sometimes you just need a change');
      res.json(updatedBowtie)
    })
  })
}

function destroy(req, res, next) {
  console.log('bye bye bowtie');

  Bowtie.remove({id: req.params.id}, function(err) {
    if (err) next(err);

    res.json({msg: 'bye bye bowtie'});
  })
}
