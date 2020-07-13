const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello BackEnd World!'));

app.get('/getData', (req,res) => {
    var XLSX = require('xlsx')
    var workbook = XLSX.readFile('./AccData.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);
    res.send(xlData);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))