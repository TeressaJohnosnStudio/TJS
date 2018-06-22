const router = require('express').Router();
const Blog = require('../models/Blog');

router.route('/blog')
  .get((req, res) => {
    Blog.find()
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })
  .post((req, res) => {
    Blog.create(req.body)
      .then(post => res.json(post))
      .catch(err => res.send(err));
  });

router.route('/blog/:_id')
  .get((req, res) => {
    Blog.findById(req.body)
      .then(post => res.json(post))
      .catch(err => res.send(err))
  })
  .put((req, res) => {
    Blog.findByIdAndUpdate(req.params._id, req.body, { new: true })
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })
  .delete((req, res) => {
    Blog.findByIdAndDelete(req.params._id)
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })

module.exports = router;
