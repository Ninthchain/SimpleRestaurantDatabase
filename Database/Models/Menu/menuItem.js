const mongoose = require('mongoose')

const MenuItemSchema = new mongoose.Schema({
    name: {type: String},
    cost: {type: Number}
})

const MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = MenuItem