var express = require('express');
var router = express.Router();
const Model = require("../model/model").default

router.get('/', function (req, res) {
  res.status(200).json(Model.Account.balance())
});

module.exports = router;
