const { IncomingMessage } = require("http");
const https = require("https");
const Database = require("../Database/database");
const app = require("express")()

const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
  };





class Server
{
    database = Database
    core = https.Server

    constructor() {
        this.database = new Database("")
        app.get("/database/get", (req, res) => {
            req.query
        })
    }

    Listen()
    {
        core = https.createServer(options, app).listen(30, "localhost", 0, ()=> {});
    }
}