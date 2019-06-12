const calc = require("./calc");
const port = 3000;
calc.calcServer(port,()=>console.log("Server started"));