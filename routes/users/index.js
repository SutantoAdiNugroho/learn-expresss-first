const express = require("express")
const router = express.Router()

const usersController = require("./controller")

//users
router.get("/", usersController.getAll)
router.get("/:id", usersController.getOne)
router.delete("/:id", usersController.deleteOne)
router.post("/", usersController.addOne)
router.put("/", usersController.updateOne)
router.post("/login", usersController.login)

module.exports = router