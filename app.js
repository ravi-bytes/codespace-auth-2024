const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Server is up and running....</h1>")
})

module.exports = app
