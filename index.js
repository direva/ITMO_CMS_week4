const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.text())
app.get('*', (req, res) => res.send('hello'))
app.post('/result4/', (req, res) => {
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.set('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers')
    res.set('content-type', 'application/json')
    res.json({ message: 'direva99', "x-result": xTest, "x-body": xBody })
})
app.listen(8080, () => console.log('App is listening on 8080'))