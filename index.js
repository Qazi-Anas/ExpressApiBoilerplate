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

//users handlers
//getAllUsers handler function
const getAllUsers = (req, res, next) => {

    res
    .status(200)
    .json({
        status: 'success',
        message: 'Get all users'
    })
}

//createNewUser handler function
const createNewUser = (req, res, next) => {
    console.log(req.body)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'new user is created'
    })
}

//getSingleUser handler function
const getSingleUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'single user data'
    })
}

//updateUser handler function
const updateUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'user updated successfully'
    })
}

//deleteUser handler function
const deleteUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: "deleted user successfully"
    })
}

//create basic endpoints for user
app.get("/api/v1/users/", getAllUsers)
app.post("/api/v1/users/", createNewUser)
app.get("/api/v1/users/:id", getSingleUser)
app.patch("/api/v1/users/:id", updateUser)
app.delete("/api/v1/users/:id", deleteUser)


app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})