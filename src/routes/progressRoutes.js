const express = require('express');
const User = require('../models/userModel');
const DSATopic = require('../models/dsaTopicModel');
const router = express.Router();

// Update subtopic status

router.patch('/update-status', async (req, res) => {
  const { userId, topicId, subTopicId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // If subTopic doesn't exist in progress, return error
    if (!(subTopicId in user.progress)) {
      return res.status(400).json({ message: `Sub-topic ID ${subTopicId} not found in progress` });
    }

    // Toggle status
    user.progress[subTopicId] = user.progress[subTopicId] === 'Done' ? 'Pending' : 'Done';

    // Mapping of parent topicId to its sub-topic IDs
    const topicMap = {
      1: [11, 12, 13, 14, 15],
      2: [21, 22, 23, 24, 25],
      3: [31, 32, 33, 34, 35],
      4: [41, 42, 43, 44, 45],
      5: [51, 52, 53, 54, 55],
      6: [61, 62, 63, 64, 65],
    };

    // const subTopicsOfMain = topicMap[topicId];
    // if (subTopicsOfMain) {
    //   const allDone = subTopicsOfMain.every((id) => user.progress[id] === 'Done');
    //   user.progress[topicId] = allDone ? 'Done' : 'Pending';
    // }
    const subTopics = topicMap[topicId];
    if (subTopics && subTopics.length) {
      const allDone = subTopics.every((id) => user.progress[id] === 'Done');
      console.log("allDoneallDone",allDone)
      user.progress[topicId] = allDone ? 'Done' : 'Pending';

      console.log(`Subtopics of ${topicId} status:`);
      subTopics.forEach((id) => {
        console.log(` - ${id}: ${user.progress[id]}`);
      });

      console.log(`Setting progress[${topicId}] to`, allDone ? 'Done' : 'Pending');
    }


    user.markModified('progress');
    await user.save();
    res.status(200).json({ message: 'Progress updated successfully', progress: user.progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// router.patch('/update-status', async (req, res) => {
//   const { userId, topicId, subTopicId, status } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const topicProgress = user.progress.find((p) => p.topicId.toString() === topicId);
//     if (!topicProgress) {
//       return res.status(404).json({ message: 'Topic progress not found' });
//     }

//     const subTopicProgress = topicProgress.subTopics.find(
//       (s) => s.subTopicId.toString() === subTopicId
//     );
//     if (subTopicProgress) {
//       subTopicProgress.status = status;
//     } else {
//       topicProgress.subTopics.push({ subTopicId, status });
//     }

//     // Check if all subtopics are done
//     const allSubTopics = await DSATopic.findById(topicId).select('subTopics');
//     const allDone = topicProgress.subTopics.every(
//       (s) => s.status === 'Done' || !allSubTopics.subTopics.some((st) => st._id.toString() === s.subTopicId.toString())
//     );

//     topicProgress.status = allDone ? 'Done' : 'Pending';

//     await user.save();
//     res.status(200).json({ message: 'Status updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// router.patch('/update-status', async (req, res) => {
//   const { userId, topicId, subTopicId, status } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     // Find topic progress, or add new topic progress if not found
//     let topicProgress = user.progress.find((p) => p.topicId.toString() === topicId);
//     if (!topicProgress) {
//       topicProgress = {
//         topicId,
//         subTopics: [],
//       };
//       user.progress.push(topicProgress);
//     }

//     // Find or update subtopic
//     const subTopicProgress = topicProgress.subTopics.find(
//       (s) => s.subTopicId.toString() === subTopicId
//     );

//     if (subTopicProgress) {
//       subTopicProgress.status = status;
//     } else {
//       topicProgress.subTopics.push({ subTopicId, status });
//     }

//     // Fetch actual subtopics for this topic from DB
//     const allSubTopics = await DSATopic.findById(topicId).select('subTopics');

//     // Determine if all are done
//     const allDone = allSubTopics.subTopics.every((st) => {
//       return topicProgress.subTopics.find(
//         (s) => s.subTopicId.toString() === st._id.toString() && s.status === 'Done'
//       );
//     });

//     topicProgress.status = allDone ? 'Done' : 'Pending';

//     await user.save();
//     res.status(200).json({ message: 'Status updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

router.get('/progress-check/:userId', async (req, res) => {
  const { userId } = req.params;

  // try {
    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ message: 'User not found' });

    const progress = user.progress

    res.status(200).json({ progress });
  // } catch (error) {
  //   res.status(500).json({ message: 'Server error', error });
  // }
})

router.get('/progress/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('progress.topicId');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const progress = {
      EASY: { done: 0, total: 0 },
      MEDIUM: { done: 0, total: 0 },
      HARD: { done: 0, total: 0 },
    };

    user.progress.forEach((topic) => {
      topic.subTopics.forEach((subTopic) => {
        const subTopicDetails = topic.topicId.subTopics.find(
          (st) => st._id.toString() === subTopic.subTopicId.toString()
        );
        if (subTopicDetails) {
          progress[subTopicDetails.level].total += 1;
          if (subTopic.status === 'Done') {
            progress[subTopicDetails.level].done += 1;
          }
        }
      });
    });

    const overallProgress = {
      done: progress.EASY.done + progress.MEDIUM.done + progress.HARD.done,
      total: progress.EASY.total + progress.MEDIUM.total + progress.HARD.total,
    };

    res.status(200).json({ progress, overallProgress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;