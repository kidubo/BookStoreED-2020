require ('mongoose')

const Publisher = mongoose.model('Publisher', {
    company_name: {},
    address: {},
    email: {},
})