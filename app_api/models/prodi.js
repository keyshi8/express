// models/fakultas.js
// Mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// Definisikan skema untuk fakultas
const prodiSchema = new mongoose.Schema({
    // Field untuk nama fakultas
    nama: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    // Field untuk singkatan fakultas
    singkatan: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    fakultas_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fakultas',
        required : true,
    },
    // Field untuk menyimpan tanggal pembuatan data fakultas
    createdAt: {
        type: Date, // Tipe data tanggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model Fakultas dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi", prodiSchema);

// Mengekspor model Fakultas agar dapat digunakan di file lain
module.exports = Prodi;