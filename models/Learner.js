const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const learnerSchema = new mongoose.Schema({ 
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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


learnerSchema.methods.generateAuthToken = async function (){
    const learner = this

    const token = jwt.sign({ _id:learner._id.toString()} , 'testing')
    learner.tokens = learner.tokens.concat({token})
    await learner.save()
    return token
}

learnerSchema.statics.findByCredential = async (email, password) =>{
    const learner = await Learner.findOne({email})

    if(!learner){
        throw new Error('unable to login!!')
    }

    const isMatch = await bcrypt.compare(password, learner.password)

    if(!isMatch){
        throw new Error('unable to login!!')
    }

    return learner

}

learnerSchema.pre('save', async function (next){
    const learner = this

    if(learner.isModified('password')){
        learner.password = await bcrypt.hash(learner.password, 8)
    }

    next()
})

const Learner = mongoose.model('Learner', learnerSchema)

module.exports = Learner