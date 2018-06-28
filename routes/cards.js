const express = require('express');
// const userRouter = express.Router()
const { UserModel } = require('../db/schema')
const { CardModel } = require('../db/schema')
const router = express.Router({ mergeParams: true })


userRouter.use('/users/:userId/cards', router)

module.exports = router