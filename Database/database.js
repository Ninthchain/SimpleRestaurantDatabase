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
        this.uri = `mongodb://${host}:${port}/`
    }

    async Connect()
    {
        log("Connecting to database..")
        try {
            await mongoose.connect(this.uri, {secureContext: true, serverApi: "1", servername: "localhost"})
            this.is_running = true;
        } catch(err) {
            log(`Cannot connect to database ${err}`)
        }
    }

    /**
     * 
     * @returns {boolean}
     */
    IsOnline() {
        return this.is_running
    }
}


module.exports = {
    Database
}