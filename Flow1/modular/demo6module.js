const fs = require("fs");

filterDir = function (filePath, ext, callback) {
    fs.readdir(filePath, function (err, result) {
        if (err) {
            throw new Error(" Something bad happend " + err)
        }
        const res = result.filter(function (fileName) {
            return (fileName.indexOf('.' + ext) !== -1);
        }).map(fileName => {
            return fileName
        })
        // const filtered = data.filter(filename => path.extname(filename) === ext);
        return callback(null, res);
    })
}
module.exports = filterDir;