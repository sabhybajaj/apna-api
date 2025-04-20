const mongoose = require('mongoose');
const User = require('./src/models/userModel');
require('dotenv').config();

mongoose.connect("mongodb+srv://sabhybajaj:svPHPc883gaWl79M@cluster0.dd09pak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        const progressSchema = new mongoose.Schema({
          topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'DSATopic' },
          subTopics: [
            {
              subTopicId: { type: mongoose.Schema.Types.ObjectId },
              status: { type: String, enum: ['Pending', 'Done'], default: 'Pending' },
            },
          ],
        });
        
        // Create a test user
        const testUser = new User({
            username: 'testuser',
            password: 'password123',
            progress: [progressSchema]
        });

        await testUser.save();
        console.log('Test user created');
        mongoose.connection.close();
    })
    .catch(err => console.error('MongoDB connection error:', err));