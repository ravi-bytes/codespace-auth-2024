require('dotenv').config()

import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Server is running...</h1>")
})

export default app