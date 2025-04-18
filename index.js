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

//custom middleware
app.use((req, res, next) => {
    console.log('hello from custom middleware')
    next()
})

//create basic endpoints for user

//get all users
app.get("/api/v1/users/", (req, res, next) => {

    res
    .status(200)
    .json({
        status: 'success',
        message: 'Get all users'
    })
})

// add new user
app.post("/api/v1/users/", (req, res, next) => {
    console.log(req.body)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'new user is created'
    })
})

// get single user
app.get("/api/v1/users/:id", (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'single user data'
    })
})

// update user
app.patch("/api/v1/users/:id", (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'user updated successfully'
    })
})

//delete user
app.delete("/api/v1/users/:id", (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: "deleted user successfully"
    })
})


app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})