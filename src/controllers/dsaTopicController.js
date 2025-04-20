const DSATopic = require('../models/dsaTopicModel');

const dsaTopicController = {
    createTopic: async (req, res) => {
        try {
            const { mainTopic, subTopics } = req.body;
            const newTopic = new DSATopic({ mainTopic, subTopics });
            await newTopic.save();
            res.status(201).json({ message: 'DSA Topic created successfully', data: newTopic });
        } catch (error) {
            res.status(500).json({ message: 'Error creating topic', error });
        }
    },

    getTopics: async (req, res) => {
        try {
            const topics = await DSATopic.find();
            res.status(200).json(topics);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching topics', error });
        }
    },

    updateSubTopicStatus: async (req, res) => {
        try {
            const { topicId, subTopicId, status } = req.body;
            const topic = await DSATopic.findById(topicId);
            if (!topic) return res.status(404).json({ message: 'Topic not found' });

            const subTopic = topic.subTopics.id(subTopicId);
            if (!subTopic) return res.status(404).json({ message: 'SubTopic not found' });

            subTopic.status = status;
            await topic.save();
            res.status(200).json({ message: 'SubTopic status updated', data: topic });
        } catch (error) {
            res.status(500).json({ message: 'Error updating status', error });
        }
    }
};

module.exports = dsaTopicController;