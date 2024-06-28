const express = require("express")

const bcryptRoute = require("./bcrypt.routes")

const router = express.Router()

router.use("/bcrypt",bcryptRoute)

module.exports = router