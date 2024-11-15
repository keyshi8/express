const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
    const {name, email, password, role} = req.body;

    try {
        let user = await user.findOne({email});
        if (user) {
            return res.status(400).json({ message: "User already exist"});
        }

        user = new User({name, email, password, role});
        await user.save();

        const payload = { userId: user.id, role: user.role};
        const token = jwt.sign(payload, procces.env.JWT_SECRET,{
            expiresIn: "1h",
        });
        res.json({ token});
    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body; // Mendapatkan email dan password dari body permintaan
    
    try {
        const user = await User.findOne({email}); // Mencari pengguna berdasarkan email
        if (!user) {
            // Jika pengguna tidak ditemukan
            return res.status(400).json({message: "Invalid email or password" }); // Kirim pesan error
        }
        
        const isMatch = await bcrypt.compare(password, user.password); // Menbandingkan password 
        if (isMatch) {
            // Jika password tidak cocok
            return res.status(400).json({message: "Invalid email or password" }); // Kirim pesan error 
        }
        
        const payload = {userId: user.id, role: user.role}; // Membuat payload token dengan ID dan role pengguna
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresin: "1h",
        });
        
        res.json({token}); // Mengirim token sebagai respons
    } catch (error) {
    
    res.status(500).json({message: error.message }); // Kirim pesan error jika ada masalah server
    }
};