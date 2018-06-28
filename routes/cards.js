const express = require('express');
// const userRouter = express.Router()
const { UserModel } = require('../db/schema')
const { CardModel } = require('../db/schema')
const router = express.Router({ mergeParams: true })


// userRouter.use('/users/:userId/cards', router)

// INDEX CARDs
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
      console.log(user.cards.length, `Cards`)
      usersCards = user.cards
    }).then((usersChars) => {
      res.send({
        usersCards
      })
    })
})

module.exports = router