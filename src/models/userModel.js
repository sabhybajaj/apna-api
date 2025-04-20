const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const progressSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'DSATopic' },
  subTopics: [
    {
      subTopicId: { type: mongoose.Schema.Types.ObjectId },
      status: { type: String, enum: ['Pending', 'Done'], default: 'Pending' },
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: {
    type: Object,
    default: {
    1 : "pending",
    2 : "pending",
    3 : "pending",
    4 : "pending",
    5 : "pending",
    6 : "pending",
    11 : "pending",
    12 : "pending",
    13 : "pending",
    14 : "pending",
    15 : "pending",
  
    21 : "pending",
    22 : "pending",
    23 : "pending",
    24 : "pending",
    25 : "pending",
  
    31 : "pending",
    32 : "pending",
    33 : "pending",
    34 : "pending",
    35 : "pending",
  
    41 : "pending",
    42 : "pending",
    43 : "pending",
    44 : "pending",
    45 : "pending",
  
    51 : "pending",
    52 : "pending",
    53 : "pending",
    54 : "pending",
    55 : "pending",

    61 : "pending",
    62 : "pending",
    63 : "pending",
    64 : "pending",
    65 : "pending",
  
  }, 
  },// Track progress for each user
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT token
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;

