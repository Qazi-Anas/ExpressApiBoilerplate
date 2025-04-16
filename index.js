const express = require("express")
const dotenv = require("dotenv")

dotenv.config({
    path: './.env'
})

const app = express()

//some important middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/public`))

app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})