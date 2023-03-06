const { log } = require('console');
const mongoose = require('mongoose');
const { EventEmitter } = require('stream');


class Database
{

    connectionString = String
    is_running = Boolean

    /**
     * 
     * @param {string} hostname 
     * @returns {Database}
     */
    constructor(host, port)
    {
        this.uri =  "mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }

    async Connect()
    {
        log("Connecting to database..")
        try {
            await mongoose.connect(this.uri)
            this.is_running = true
        } catch(err) {
            log(`Cannot connect to database ${err}`)
        }
    }
}


module.exports = Database;