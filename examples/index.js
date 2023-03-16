const fs = require('fs')

fs.writeFile('./text.txt', 'Colééééé', (error) => {
    if (error) {
        console.log('Deu ruim de novo!')
    }
})

fs.readFile('./user.json', { encoding: 'utf-8' }, (error, data) => {
    var user = JSON.parse(data)
    if (error) {
        console.log(error)
    } else {
        user.name = 'NNaaaaaaana'
        fs.writeFile('./user.json', JSON.stringify(user), (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log(user.name)
            }
        })
    }
})