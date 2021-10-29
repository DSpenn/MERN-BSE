const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')
  } catch (err) {
    console.log('error: ' + err)
  }
})()

module.exports = mongoose.connection;