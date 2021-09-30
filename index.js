const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()
app.use(bodyParser.text())
// app.get('*', (req, res) => res.send('hello'))
app.post('/result4/', (req, res) => {
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
    res.set('Access-Control-Allow-Origin', '*')
    // res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
    res.set('Content-Type', 'application/json')
    res.json({ message: 'direva99', "x-result": xTest, "x-body": xBody })
})
app.get('/result4/', (req, res) => {
    const xTest = req?.headers?.['x-test']
    const xBody = 'abc'
    res.set('Access-Control-Allow-Origin', '*')
    // res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
    res.set('Content-Type', 'application/json')
    res.json({ message: 'direva99', "x-result": xTest, "x-body": xBody })
})
app.listen(PORT, () => console.log(`App is listening on ${PORT}`))