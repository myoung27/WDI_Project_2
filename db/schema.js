const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ['Lowest', 'Low', 'Normal', 'High', 'Highest']
    },
    dueDate: {
        type: Date
    },
    responsible: {
        type: String
    },
    completed: {
        type: Boolean,
    }

})

const RetroSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    positiveNotes: {
        type: String
    },
    negativeNotes: {
        type: String
    },
    meetingDate: {
        type: Date
    },
    participants: {
        type: String
    },
    completed: {
        type: Boolean
    },
    retroItems: [ItemSchema]
})


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    retros: [RetroSchema]
})

const UserModel = mongoose.model('User', UserSchema)
const RetroModel = mongoose.model('Retro', RetroSchema)
const ItemModel = mongoose.model('Item', ItemSchema)

module.exports = {
    UserModel: UserModel,
    RetroModel: RetroModel,
    ItemModel: ItemModel
}