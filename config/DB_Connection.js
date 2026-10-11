const mongoose = require('mongoose');

async function connectDB() {
  const connectionString = process.env.DB_String;
  if (!connectionString) {
    throw new Error('DB_String is missing. Add your MongoDB connection string to config/.env.');
  }

  await mongoose.connect(connectionString);
  console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
}

module.exports = connectDB;
