var express = require('express');
var router = express.Router();

var bowtiesController = require('../controllers/bowties_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// route for new bowties form
// router.get('/bowties/new', function(req, res, next) {
//   res.render('form', { title: 'New Bowtie' });
// });

// API routes
router.route('/api/bowties')
  .get(bowtiesController.index)
  .post(bowtiesController.create);

router.route('/api/bowties/:id')
  .get(bowtiesController.show)
  .patch(bowtiesController.update)
  .delete(bowtiesController.destroy);

module.exports = router;
