const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
})

// userSchmema.pre('save', function(next) {
//   let user = this;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if(err) return next(err);

//       user.password = hash;
//       next();
//     })
//   })
// })

// export default mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);

