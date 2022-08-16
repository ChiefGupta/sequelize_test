const {sequelize} = require('./models')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("sequelize test server")
})

app.listen(5000, async () => {
    console.log("server running on port 5000")
    await sequelize.sync()
})