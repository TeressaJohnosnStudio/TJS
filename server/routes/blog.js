const router = require('express').Router();
const Blog = require('../models/Blog');

router.route('/blog')
  .get((req, res) => {
    Blog.find()
      .then(blog => res.json(blog))
      .catch(err => res.send(err));
  })
  .post((req, res) => {
    Blog.create(req.body)
      .then(blog => res.json(blog))
      .catch(err => res.send(err));
  });

module.exports = router;
