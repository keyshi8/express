// Mengimpor axios untuk melakukan HTTP request
const axios = require("axios");


const index = async (req, res) => {
    try {
        // Mendapatkan data fakultas dari API external
        const response = await axios.get(
            "https://express-app-smoky.vercel.app/api/fakultas"
            //"https://express-nine-chi.vercel.app/"
        );

        // Data fakultas dari API
        const fakultas = response.data;

        // Render halaman 'fakultas' dengan data yang diperoleh dari API
        res.render("fakultas", {
            title: "Halaman Fakultas",
            fakultas: fakultas,
            layout: "main",
        });
    } catch (error) {
        // Menangani kesalahan saat mengambil data dari API
        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data fakultas dari API");
    }
};

module.exports = { index };