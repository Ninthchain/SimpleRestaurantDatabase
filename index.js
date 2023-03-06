const DatabaseServer = require("./DatabaseHttpServer/server");

server = new DatabaseServer()

server.Listen("localhost", 30)