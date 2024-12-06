// Mengimpor modul express untuk membuat router
const express = require("express");
// Membuat instance router dari express
const router = express.Router();
// Mengimpor Controller fakultas untuk menangani logika bisnis
const fakultasController = require("../controllers/fakultasController");

// mengimpor middleware untuk autentikasi dan pengecekan peran
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
// Definisi rute untuk fakultas
// Mengatur rute GET untuk mendapatkan semua data fakultas
router.get("/", fakultasController.getAllFakultas);
router.post("/",  fakultasController.createFakultas);
router.get("/:id", fakultasController.getFakultasById);
router.put("/:id",authMiddleware,roleMiddleware("admin"), fakultasController.updateFakultas);
router.delete("/:id",authMiddleware,roleMiddleware("admin"), fakultasController.deleteFakultas);

// Mengeksport router agar dapat digunakan di file lain (misalnya, di app.js)
module.exports = router;