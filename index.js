const app = require('./app').default
const {PORT} = process.env
app.listen(PORT, () => {
    console.log(`SERVER is running on PORT: ${PORT}`)
})
