const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./routes/authRoutes');
const dsaTopicRoutes = require('./routes/dsaTopicRoutes');
const progressRoutes = require('./routes/progressRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS with specific options
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://sabhybajaj:svPHPc883gaWl79M@cluster0.dd09pak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/dsa-topics', dsaTopicRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// POST /api/dsa-topics/create
// Content-Type: application/json

// {
//     "mainTopic": "Algorithms",
//     "subTopics": [
//         {
//             "name": "Sorting Algorithms",
//             "leetCodeLink": "https://leetcode.com/sorting",
//             "youtubeLink": "https://youtube.com/sorting",
//             "articleLink": "https://example.com/sorting",
//             "level": "EASY",
//             "status": "Done"
//         },
//         {
//             "name": "Searching Algorithms",
//             "leetCodeLink": "https://leetcode.com/searching",
//             "youtubeLink": "https://youtube.com/searching",
//             "articleLink": "https://example.com/searching",
//             "level": "MEDIUM",
//             "status": "Pending"
//         }
//     ]
// }

// PATCH /api/dsa-topics/update-status
// Content-Type: application/json

// {
//     "topicId": "topic-id-here",
//     "subTopicId": "sub-topic-id-here",
//     "status": "Done"
// }