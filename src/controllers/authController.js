const User = require('../models/userModel'); // Ensure this path is correct

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            const token = user.generateToken();
            res.status(200).json({ token , user: { id: user._id, username: user.username } });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    },

    register: async (req, res) => {
        const { username, password } = req.body;

        try {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            const newUser = new User({ username, password });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};

module.exports = authController;