const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.use( function(req, res) {
  req.url
  console.log(req.url);
  res.json(todos);
});

module.exports = router;
