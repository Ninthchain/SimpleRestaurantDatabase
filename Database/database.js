const { log } = require('console');
const mongoose = require('mongoose');
const { EventEmitter } = require('stream');


class Database
{
    connection = mongoose.Connection
    is_secured = Boolean
    /**
     * 
     * @param {string} uri 
     * @returns {Database}
     */
    constructor(uri)
    {
        connection = mongoose.createConnection(uri)
        
    }

    async Connect()
    {
    }
}


module.exports = Database;