const fs = require('fs')
const write = function (data="Default") {
    fs.writeFileSync('Task.txt', data);
}
module.exports = write;