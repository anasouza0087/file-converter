const fs = require('fs')

class Reader {


    Read(filePath) {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
}

module.exports = Reader