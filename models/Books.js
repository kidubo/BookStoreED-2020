require ('mongoose')

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
    // }         
    
    // MONGOOSE TAKE CARES OF THE ID'S

})