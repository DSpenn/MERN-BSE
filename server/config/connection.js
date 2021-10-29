const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;


/* (async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')
  } catch (err) {
    console.log('error: ' + err)
  }
})() */