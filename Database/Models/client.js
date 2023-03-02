const { Schema } = require("mongoose");

const Client = new Schema({
    name: {type: String},
    balance: {type: Number},
    isRegular: {type: Boolean}
})

module.exports = Client