const mongoose = require('mongoose')

const CurrencySchema = new mongoose.Schema({
    name: {type: String},
    is_aviable: {type: Boolean}
})

const Currency = mongoose.model('Currency', CurrencySchema)

module.exports = Currency