require ('mongoose')
const { Schema, Mongoose } = require('mongoose')

const booksSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },

    author: {
        type:String,
        required: true
    },

    ISBN : {
        type: String,
        required: true
    },

    title : {
        type:String,
        required:true,
        trim: true,

    },

    published_date : {
        type: String,
        required: true
    },

    book_img :{
        type: Image,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    // owner : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref : 'Learner'
    // }


})


const Books = mongoose.model('Books' ,booksSchema )

module.exports = Books