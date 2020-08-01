require ('mongoose')

const Author = mongoose.model('Author', {
    first_name :{},
    last_name:{},
    address: {},
    email: {},
})