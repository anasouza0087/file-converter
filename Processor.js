class Processor {
    static Process(data) {
        var row = data.split('\n')
        var rowList = []
        row.map((r) => {
            var splitRows = r.split(',')
            rowList.push(splitRows)
        })
        console.log(rowList)
        return rowList
    }
}

module.exports = Processor