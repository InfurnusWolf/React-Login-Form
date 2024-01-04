const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/react-login-tut')
  .then(() => console.log('mongodb connected'))
  .catch(() => console.log('failed'));

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', newSchema);

// Create a new instance of the User model
const user = new User({
  email: 'test@example.com',
  password: 'password123', // make sure to hash passwords in a real application
});

// Save the new user to the database
user.save()
  .then(() => console.log('User added'))
  .catch(err => console.error('Could not add user', err));

module.exports = User;