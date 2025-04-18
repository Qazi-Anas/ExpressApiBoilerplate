const express = require("express")
const userControllers = require("./../controllers/userControllers")

const router = express.Router()

//create basic endpoints for user
router.route("/")
    .get(userControllers.getAllUsers)
    .post(userControllers.createNewUser)
router.route("/:id")
    .get(userControllers.getSingleUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser)

module.exports = router