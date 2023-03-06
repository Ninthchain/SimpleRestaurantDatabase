const mongoose = require('mongoose')

const MenuItem = new mongoose.Schema({
    name: {type: String},
    cost: {type: Number}
})