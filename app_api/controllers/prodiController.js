// Mengimpor model Fakultas untuk berinteraksi dengan koleksi fakultas di MongoDB
const Prodi = require("../models/prodi");
// Mendapatkan semua data fakultas
const getAllProdi = async (req, res) => {
    try {
        // Mengambil semua fakultas dari database
        const prodi = await Prodi.find().populate("fakultas_id", "nama singkatan");
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Mendapatkan satu fakultas berdasarkan ID
const getProdiById = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Membuat fakultas baru
const createProdi = async (req, res) => {
    // Membuat instance fakultas baru dari data yang diterima
    const prodi = new Prodi({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
        fakultas_id: req.body.fakultas_id,
    });

    try {
        // Menyimpan fakultas baru ke database
        const newProdi = await prodi.save();
        // Mengirimkan respons dengan status 201 dan data fakultas baru
        res.status(201).json(newProdi);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message });
    }
};

// Memperbarui data fakultas
const updateProdi = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }

        // Memperbarui nama fakultas jika ada di request body
        if (req.body.nama != null) {
            prodi.nama = req.body.nama;
        }
        // Memperbarui singkatan fakultas jika ada di request body
        if (req.body.singkatan != null) {
            prodi.singkatan = req.body.singkatan;

        }
        if (req.body.fakultas_id != null) {
            prodi.fakultas_id = req.body.fakultas_id;
        }

        // Menyimpan perubahan ke database
        const updatedProdi = await prodi.save();
        // Mengirimkan respons dengan status 200 dan data fakultas yang diperbarui
        res.status(200).json(updatedProdi);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat memperbarui
        res.status(400).json({ message: err.message });
    }
};

// Menghapus fakultas berdasarkan ID
const deleteProdi = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }

        // Menghapus fakultas dari database
        await prodi.deleteOne();
        // Mengirimkan respons dengan status 200 dan pesan penghapusan
        res.status(200).json({ message: "Prodi deleted" });
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Mengeksport fungsi-fungsi kontroler agar dapat digunakan di file lain
module.exports = {
    getAllProdi,
    createProdi,
    getProdiById,
    updateProdi,
    deleteProdi,
};