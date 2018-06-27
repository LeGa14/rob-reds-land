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
    res.send({ user })
  }).catch((err) => res.send(err))
})

// UPDATE USER
router.patch('/:id', (req, res) => {
  console.log(`The current User: ---${req.params.id}--- is being altered`)
  UserModel.findByIdAndUpdate(req.params.id)
  .then((editedUser) => {
    console.log(editedUser)
    // const editedUser = new UserModel({})
    editedUser.username = req.body.username
    editedUser.email = req.body.email
    editedUser.password = req.body.password
    editedUser.image = req.body.image
    return editedUser.save()
  }).then((newStateOfUsers) => {
    res.send(newStateOfUsers)
  })
})
// router.post('/', (req, res) => {
//   console.log(req.params.userId)
//   User.findById(req.params.userId).then((user) => {
//     const newIdea = new Idea({})
//     user.ideas.push(newIdea)
//     return user.save()
//   }).then((savedUser) => {
//     res.send(savedUser)
//   })
// })
// DELETE USER
router.delete('/:id', (req, res) => {
  UserModel.findByIdAndRemove(req.params.id)
  .then((user) => {
    return user.save()
  }).then((newStateOfUsers) => {
    res.send(newStateOfUsers)
  })
})
module.exports = router;



// const express = require('express')
// const User = require('../models/User')
// const Idea = require('../models/Idea')
// // DONT FORGET THE MERGE PARAMS. This allows you to read any
// // route params declared in server.js
// const router = express.Router({ mergeParams: true })

// router.post('/', (req, res) => {
//   console.log(req.params.userId)
//   User.findById(req.params.userId).then((user) => {
//     const newIdea = new Idea({})
//     user.ideas.push(newIdea)
//     return user.save()
//   }).then((savedUser) => {
//     res.send(savedUser)
//   })
// })

// router.patch('/:id', (req, res) => {
//   User.findById(req.params.userId).then((user) => {
//     const ideaToUpdate = user.ideas.id(req.params.id)
//     ideaToUpdate.title = req.body.title
//     ideaToUpdate.description = req.body.description
//     return user.save()
//   }).then((savedUser) => {
//     res.send(savedUser)
//   })
// })

// router.delete('/:id', (req, res) => {
//   User.findById(req.params.userId).then((user) => {
//     user.ideas.id(req.params.id).remove()
//     return user.save()
//   }).then((savedUser) => {
//     res.send(savedUser)
//   })
// })

// module.exports = router
