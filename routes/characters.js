const express = require('express');
// const userRouter = express.Router()
const { UserModel } = require('../db/schema')
const { CharacterModel } = require('../db/schema')
const router = express.Router({ mergeParams: true })


// userRouter.use('/users/:userId/characters', router)

// INDEX CHARACTERs
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

// SHOW a single CHARACTER
router.get('/:characterId', (req, res) => {
  // const user = 
  UserModel.findById(req.params.userId)
    .then((user) => {
      foundCharacter = user.characters.id(req.params.characterId)
      res.send({
        foundCharacter
      })
    })
})

//CREATE CHARACTER
router.post('/', (req, res) => {
  const newChar = new CharacterModel(req.body)
  newChar.save()
    .then((character) => {
      UserModel.findById(req.params.userId)
        .then((user) => {
          user.characters.push(newChar)
          return user.save()
            .then((newStateOfUser) => {
              res.send({ newStateOfUser })
            })
        })
    })
})

router.delete('/:characterId', (req, res) => {
  UserModel.findById(req.params.userId)
  .then((user) => {
    user.characters.id(req.params.characterId).remove()
    return user.save()
  })
  .then((savedUser) => {
    res.send({user: savedUser})
  })
})

module.exports = router