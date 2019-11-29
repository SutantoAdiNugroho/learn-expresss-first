const express = require("express")
const router = express.Router()

const todoController = require("./controller")

//todo
router.get("/", todoController.getAll)
router.get("/:id", todoController.getOne)
router.delete("/:id", todoController.deleteOne)
router.post("/", todoController.addOne)
router.put("/", todoController.updateOne)

module.exports = router;