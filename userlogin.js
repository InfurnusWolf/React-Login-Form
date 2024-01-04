// Import your model
const User = require('./models/user'); // adjust the path to match your file structure

// Create a new instance of your model
const user = new User({
  username: 'testUser',
  password: 'password123', // make sure to hash passwords in a real application
});

// Save the instance to your database
user.save()
  .then(() => console.log('User added'))
  .catch(err => console.error('Could not add user', err));