const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connect: ${conn.connection.host}`.cyan.underline);
        console.log(`Database: ${conn.connection.name}`);
    } catch (error) {
        console.log(error)
        process.exit(1); //exit with failure
    }
};
 
module.exports = connectDB;