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

// SHOW a single USER
router.get('/:id', (req, res) => {
  const user = UserModel.findById(req.params.id).then((user) => {

    res.send({
      user
    })
  })
})

//NEW USER
router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send({user})
  })
})

module.exports = router;
