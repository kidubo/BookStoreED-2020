require ('mongoose')

const ShoppingBasket = mongoose.model('Basket', {

})   


// we are not gonna save cart to mongoose to database we need to create the constructor 
// function each time we fill our cart/basket it get call to do what it required to do