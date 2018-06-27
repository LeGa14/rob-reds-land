const express = require('express');
// const userRouter = express.Router()
const { UserModel } = require('../db/schema')
const { CharacterModel } = require('../db/schema')
const router = express.Router({ mergeParams: true })


// userRouter.use('/users/:userId/characters', router)

/* GET users listing. */
router.get('/', (req, res) => {
  // UserModel.find().then((users) => {
  console.log('The User ID is...')
  console.log(req.params.userId)
  UserModel.findById(req.params.userId)
    .then((user) => {
      user = user
      console.log(`This user's name is`)
      console.log(user.username)
      console.log(`They have...`)
      console.log(user.characters.length, `Characters`)
      usersCharacters = user.characters
    }).then((usersChars) => {
      res.send({
        usersCharacters
      })
    })
})

// // SHOW a single USER
// router.get('/:id', (req, res) => {
//   const user = UserModel.findById(req.params.id).then((user) => {

//     res.send({
//       user
//     })
//   })
// })

// //NEW USER
// router.post('/', (req, res) => {
//   const newUser = new UserModel(req.body)
//   newUser.save().then((user) => {
//     res.send({ user })
//   }).catch((err) => res.send(err))
// })

// // UPDATE USER
// router.patch('/:id', (req, res) => {
//   console.log(`The current User: ---${req.params.id}--- is being altered`)
//   UserModel.findByIdAndUpdate(req.params.id)
//   .then((editedUser) => {
//     editedUser.username = req.body.username
//     editedUser.email = req.body.email
//     editedUser.password = req.body.password
//     editedUser.image = req.body.image
//     return editedUser.save()
//   }).then((newStateOfUsers) => {
//     res.send(newStateOfUsers)
//   })
// })

// // DELETE USER
// router.delete('/:id', (req, res) => {
//   UserModel.findByIdAndRemove(req.params.id)
//   .then((user) => {
//     return user.save()
//   }).then((newStateOfUsers) => {
//     res.send(newStateOfUsers)
//   })
// })
module.exports = router