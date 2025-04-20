const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
    sub_topic_id: { type: Number, required: true },
    name: { type: String, required: true },
    leetCodeLink: { type: String, required: false },
    youtubeLink: { type: String, required: false },
    articleLink: { type: String, required: false },
    level: { type: String, enum: ['EASY', 'MEDIUM', 'HARD'], required: true },
    status: { type: String, enum: ['Pending', 'Done'], default: 'Pending' }
});

const dsaTopicSchema = new mongoose.Schema({
    main_id : { type: Number, required: true },
    mainTopic: { type: String, required: true },
    subTopics: [subTopicSchema]
}, { timestamps: true });

const DSATopic = mongoose.model('DSATopic', dsaTopicSchema);

module.exports = DSATopic;