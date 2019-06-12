const express = require("express");
const httpServer = require("http");

// Basic calc api
function add(n1, n2) {
    return n1 + n2;
}
// End of basic

// Rest calc api
function calcServer(port, isStartedCb) {
    const app = express() //Opretter express
    app.get("/api/calc/add/:n1/:n2", (req, res) => { //laver et endpoint der tager imod 2 parametre
        const n1 = Number(req.params.n1);
        const n2 = Number(req.params.n2);
        res.send(add(n1, n2).toString());
    })
    let server = httpServer.createServer(app);
    server.listen(port, () => { //starter serveren
        isStartedCb(server);
    })
}
module.exports = {
    add,
    calcServer
}