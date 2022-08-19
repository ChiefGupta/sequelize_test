require('dotenv').config
const {sequelize} = require('./models')
const express = require('express')
const app = express()
const routes = require('./routes/index_route')
const port = process.env.PORT

app.use(express.json())
app.use('/', routes)

app.get('/', (req, res) => {
    res.send('sequelize test server')
})

app.listen(port, async() => {
    console.log('server running on port ' + port)
    await sequelize.authenticate() 
})