const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ricky:juarasatu1@cluster0.du3lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb://localhost:27017/mdpb"
        );

        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB