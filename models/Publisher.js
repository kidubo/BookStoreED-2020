const mongoose = require ('mongoose')
const validator = require('validator')

const pubSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
          if (!validator.isEmail(value)){
                 throw new Error ('Email is invalid')
          }
        }
    },
    password: {
        type: String,
        trim:true,
        minlength: 8,
        required: true
    },

    tokens: [{
        token : {
            type: String,
            required: true
        }
    }]
})

const Publisher = mongoose.model('Publisher', pubSchema)

module.exports = Publisher