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
router.get('/:userId', (req, res) => {
  const user = UserModel.findById(req.params.userId).then((user) => {

    res.send({
      user
    })
  })
})

//NEW USER
router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send({ user })
  }).catch((err) => res.send(err))
})

// UPDATE USER
router.patch('/:userId', (req, res) => {
  console.log(`The current User: ---${req.params.userId}--- is being altered`)
  UserModel.findByIdAndUpdate(req.params.userId)
  .then((editedUser) => {
    editedUser.username = req.body.username
    editedUser.email = req.body.email
    editedUser.password = req.body.password
    editedUser.image = req.body.image
    return editedUser.save()
  }).then((newStateOfUsers) => {
    res.send(newStateOfUsers)
  })
})

// DELETE USER
router.delete('/:userId', (req, res) => {
  UserModel.findByIdAndRemove(req.params.userId)
  .then((user) => {
    return user.save()
  }).then((newStateOfUsers) => {
    res.send(newStateOfUsers)
  })
})
module.exports = router;