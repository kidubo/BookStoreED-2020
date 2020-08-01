const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/bookStoreAPI'
mongoose.connect(url, { useCreateIndex: true,
    useNewUrlParser: true, useUnifiedTopology: true
})

const Books = mongoose.model('Books' , {
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
        }

        // id: {
        //     type: String,
        //     required: true
        // }         MONGOOSE TAKE CARES OF THE ID'S






})

const Learner = mongoose.model('Learner', { 
    firstName:{},
    lastName: {},
    phone: {},
    email: {},
    password: {},
    // id :{}      mongoose provide as with ids
    

})

const Author = mongoose.model('Author', {
    first_name :{},
    last_name:{},
    address: {},
    email: {},
})

const Publisher = mongoose.model('Publisher', {
    company_name: {},
    address: {},
    email: {},
})