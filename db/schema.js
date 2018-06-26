const mongoose = require('mongoose')

const Schema = mongoose.Schema

// SCHEMAS
const CardSchema = new Schema({
    cardType: String,
    image: String,
    characterId: String
})



const CharacterSchema = new Schema({
    class: {
        type: String,
        default: "soldier"
    },
    name: {
        type: String,
        default: "Axton",
        uninque: true
    },
    health: {
        type: Number,
        default: 100
    },
    cash: {
        type:Number,
        default: 0
    },
    deployed: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: "https://www.placecage.com/c/200/200"
    }
})

const UserSchema = new Schema({
    username: {
        type: String,
        default: "userName",
        unique: true
    },
    email: {
        type: String,
        default: "someone@somewhere.com",
        unique: true
    },
    password: {
        type: String,
        default: "password"
    },
    image: {
        type: String,
        default: "https://www.placecage.com/c/400/400"
    },
    characters: [CharacterSchema],
    cards: [CardSchema]
})

// MODELS
const UserModel = mongoose.model("User", UserSchema)
const CharacterModel = mongoose.model("Character", CharacterSchema)
const CardModel = mongoose.model("Card", CardSchema)

module.exports = {
    CardModel,
    CharacterModel,
    UserModel
}