class Table {
    constructor(array) {
        this.header = array[0]
        array.shift()
        this.rows = array
    }

    // Ao utilizar a palavra reservada get, o método se transforma em atributo
    get RowCounter() {
        return this.rows.length
    }

    get ColCounter() {
        return this.header.length
    }
}

module.exports = Table