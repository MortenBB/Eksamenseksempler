const filterDir = require("./demo6module");
const filePath = process.argv[2];
const ext = process.argv[3];

filterDir(filePath, ext, function(err, data){
    if (err) {
        throw new Error(" Something bad happend " + err)
    }
    console.log(data.join("\n"));
})