const express = require("express"); // mengimpor express untuk membuat rute
const router = express.Router(); // membuat instance router dari express
const authController = require  ("../controllers/authController") // mengimpor controller

// rute untuk pengguna baru
router.post("/register", authController.register);

// rute untuk login pengguna
router.post("/login", authController.login);

module.exports = router;

