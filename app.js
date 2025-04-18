const express = require("express")

const app = express()

//some important middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/public`))

//custom middleware
app.use((req, res, next) => {
    console.log('hello from custom middleware')
    next()
})

//users routes
const userRoutes = require("./routes/userRoutes")
app.use("/api/v1/users", userRoutes)

module.exports = app