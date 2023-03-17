var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var Writer = require('./Writer')
var PdfWriter = require('./PdfWriter')

var reader = new Reader()
var writer = new Writer()

async function main() {
    var data = await reader.Read('./users.csv')
    var processedData = Processor.Process(data)
    var users = new Table(processedData)
    var html = await HtmlParser.Parse(users)

    writer.Write(Date.now() + '.html', html)
    PdfWriter.WritePdf(Date.now() + '.pdf', html)

    console.log(`Cabeçalho:  ${users.header}`)
    console.log(`Linhas: ${users.rows}`)
    console.log(`Nº de linhas: ${users.RowCounter}`)
    console.log(`Nº de colunas: ${users.ColCounter}`)

    console.log(html)
}

main()