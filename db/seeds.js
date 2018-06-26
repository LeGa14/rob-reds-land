require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("There somebody READY to ROB RED'S LAND")
    })
.catch((err) => {
    console.log('ERROR', err)
})

// mongoose.Promise = global.Promise

const { UserModel, CharacterModel, CardModel } = require('./schema')

const gunCard = new CardModel({
    cardType: "assassin",
    image: "http://fillmurray.com/g/200/300",
    characterId: "something"
})
const zer0 = new CharacterModel({
    class: "soldier",
    name: "zer0",
    cash: 5000,
    image: "https://www.placecage.com/g/300/300"
})
const gamer = new UserModel({
    username: "cardGamer",
    email: "borderlands@fan.com",
    password: "letsrobred",
    image: "https://www.placecage.com/c/250/250",
    characters: [zer0],
    cards: [gunCard]

})

UserModel.remove({})
    .then(() => gamer.save())
    .then(() => console.log('Successful Save Point'))
    .then(() => mongoose.connection.close())