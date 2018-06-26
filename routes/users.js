var express = require('express');
var router = express.Router();

const { UserModel } = require('../db/schema')

/* GET users listing. */
router.get('/', (req, res) => {
  UserModel.find().then((users) => {
    res.send({
      users
    })
  })
})

module.exports = router;
