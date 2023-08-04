const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://admin:sPyzgS68icKFSU5Q@cluster0.hylauax.mongodb.net/bt_item?retryWrites=true&w=majority'; 

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Connection error:', err);
  }
};

module.exports = connectDB;