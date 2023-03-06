const { Schema, model } = require("mongoose");
const Balance = require("./Money/balance");

const CustomerSchema = new Schema({
    name: {type: String},
    balance: {type: Balance},
    isRegular: {type: Boolean}
})

const Customer = model('Customer', CustomerSchema)

module.exports = Customer