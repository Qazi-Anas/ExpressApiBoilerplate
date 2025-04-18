//users handlers
//getAllUsers handler function
exports.getAllUsers = (req, res, next) => {

    res
    .status(200)
    .json({
        status: 'success',
        message: 'Get all users'
    })
}

//createNewUser handler function
exports.createNewUser = (req, res, next) => {
    console.log(req.body)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'new user is created'
    })
}

//getSingleUser handler function
exports.getSingleUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'single user data'
    })
}

//updateUser handler function
exports.updateUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: 'user updated successfully'
    })
}

//deleteUser handler function
exports.deleteUser = (req, res, next) => {
    console.log(`user id = ${req.params.id}`)

    res
    .status(200)
    .json({
        status: 'success',
        message: "deleted user successfully"
    })
}