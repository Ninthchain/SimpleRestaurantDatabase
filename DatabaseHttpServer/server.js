const { IncomingMessage } = require("http");
const https = require("https");
const { default: mongoose } = require("mongoose");
const Database = require("../Database/database");
const app = require("express")()

const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
  };



class databaseServer
{
    database = Database
    core = https.Server

    constructor() {
        this.database = new Database("localhost", 30)
        app.get("/database/", (req, res) => {
        })
        app.get("/database/status", (req, res) => {
            res.json({
                online: true
            })
        })
    }

    /**
     * 
     * @param {String} host 
     * @param {Number} port 
     */
    Listen(host, port)
    {
        this.core = https.createServer(options, app).listen(30, "localhost", 0, ()=> {});
    }
}

module.exports = databaseServer