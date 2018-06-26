const mongoose = require('mongoose')

const Schema = mongoose.Schema

// SCHEMAS

const CharacterSchema = new Schema({
    userId: {
        type: String,
        default: "0000000"
    },
    class: {
        type: String,
        default: "soldier"
    },
    name: {
        type: String,
        default: "Axton"
    },
    health: Number,
    cash: Number,
    deployed: {
        type: Boolean,
        default: false    
    },
    image: {
        type: String,
        default: "https://www.placecage.com/c/200/200"
    },
})


const UserSchema = new Schema({
    username: {
        type: String,
        default: "userName"
    },
    email: {
        type: String,
        default: "someone@somewhere.com"
    },
    password: {
        type: String,
        default: "password"
    },
    image: {
        type: String,
        default: "https://www.placecage.com/c/400/400"
    },
})

// MODELS
const UserModel = mongoose.model("User", UserSchema)
const CharacterModel = mongoose.model("Character", CharacterSchema)

module.exports = {
    UserModel,
    CharacterModel
}