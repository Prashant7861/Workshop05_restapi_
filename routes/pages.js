
const path = require('path');
const express = require('express');

const router = express.Router();

function sendPage(req, res, fileName) {
  res.sendFile(path.join(req.app.locals.publicDir, fileName));
}

// Home page
router.get('/', (req, res) => {
  return sendPage(req, res, 'index.html');
});

// About page
router.get('/about', (req, res) => {
  return sendPage(req, res, 'about.html');
});

// Contact page
router.get('/contact', (req, res) => {
  return sendPage(req, res, 'contact.html');
});

// Blog page
router.get('/blog', (req, res) => {
  return sendPage(req, res, 'blog.html');
});

module.exports = router;
