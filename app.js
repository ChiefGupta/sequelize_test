const {sequelize} = require('./models')
const express = require('express')
const app = express()
const routes = require('./routes/user_route.js')

app.use(express.json())
app.use('/', routes)

app.get('/', (req, res) => {
    res.send('sequelize test server')
})

app.listen(5000, async () => {
    console.log('server running on port 5000')
    await sequelize.authenticate() 
})