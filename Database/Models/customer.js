const { Schema } = require("mongoose");

const Customer = new Schema({
    name: {type: String},
    balance: {type: Number},
    isRegular: {type: Boolean}
})

module.exports = Customer