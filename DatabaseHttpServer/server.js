const https = require("https");
const Database = require("../Database/database");
const app = require("express")()
const fs = require('fs');
const { log } = require("console");


const options = {
    key: fs.readFileSync('./SSH/agent2-key.pem'),
    cert: fs.readFileSync('./SSH/agent2-cert.pem'),
  };



class DatabaseServer
{
    database = Database
    core = https.Server

    constructor() {
        log("Setting up the server")

        log("\tCreating database object")
        this.database = new Database("localhost", 30)
        log("\t\tCreated!")

        log("\tSetting up routes")
        app.get("/database/", (req, res) => {
        })
        app.get("/database/status", (req, res) => {
            res.json({
                online: true
            })
        })
        log("\t\tDone!")
        log("Setted up")
    }

    /**
     * 
     * @param {String} host 
     * @param {Number} port 
     */
    Listen(host, port)
    {
        log("Connecting to the mongoDB")
        this.database.Connect()

        log("Creating server and begining to listen")
        this.core = https.createServer(options, app).listen(30, "localhost", 0, ()=> {});

        log("All done!")
    }
}

module.exports = DatabaseServer