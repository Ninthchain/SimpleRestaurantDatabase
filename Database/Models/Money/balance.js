const mongoose = require('mongoose')
const Currency = require('./currency')

const BalanceSchema = new mongoose.Schema({
    currency: {type: Currency}
})

const Balance = mongoose.model('Balance', BalanceScheam)

module.exports = Balance