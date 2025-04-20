const mongoose = require('mongoose');
const DSATopic = require('./src/models/dsaTopicModel');
require('dotenv').config();

mongoose.connect("mongodb+srv://sabhybajaj:svPHPc883gaWl79M@cluster0.dd09pak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        // Create sample DSA topics
        const topics = [
            {
              mainTopic: 'Algorithms',
              main_id : 1,
              subTopics: [
                {
                  sub_topic_id: 11,
                  name: 'Sorting Algorithms',
                  leetCodeLink: 'https://leetcode.com/tag/sorting/',
                  youtubeLink: 'https://www.youtube.com/watch?v=kgBjXUE_Nwc',
                  articleLink: 'https://www.geeksforgeeks.org/sorting-algorithms/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 12,
                  name: 'Searching Algorithms',
                  leetCodeLink: 'https://leetcode.com/tag/binary-search/',
                  youtubeLink: 'https://www.youtube.com/watch?v=U4r3gGZB3g4',
                  articleLink: 'https://www.geeksforgeeks.org/searching-algorithms/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 13,
                  name: 'Sliding Window',
                  leetCodeLink: 'https://leetcode.com/tag/sliding-window/',
                  youtubeLink: 'https://www.youtube.com/watch?v=MK-NZ4hN7rs',
                  articleLink: 'https://www.geeksforgeeks.org/window-sliding-technique/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 14,
                  name: 'Backtracking',
                  leetCodeLink: 'https://leetcode.com/tag/backtracking/',
                  youtubeLink: 'https://www.youtube.com/watch?v=p-_p7mhmHnQ',
                  articleLink: 'https://www.geeksforgeeks.org/backtracking-algorithms/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 15,
                  name: 'Dynamic Programming',
                  leetCodeLink: 'https://leetcode.com/tag/dynamic-programming/',
                  youtubeLink: 'https://www.youtube.com/watch?v=tyB0ztf0DNY',
                  articleLink: 'https://www.geeksforgeeks.org/dynamic-programming/',
                  level: 'HARD',
                }
              ]
            },
            {
              main_id : 2,
              mainTopic: 'Data Structure',
              subTopics: [
                {
                  sub_topic_id: 21,
                  name: 'Arrays',
                  leetCodeLink: 'https://leetcode.com/tag/array/',
                  youtubeLink: 'https://www.youtube.com/watch?v=lvwj5a8y5I0',
                  articleLink: 'https://www.geeksforgeeks.org/array-data-structure/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 22,
                  name: 'Stacks',
                  leetCodeLink: 'https://leetcode.com/tag/stack/',
                  youtubeLink: 'https://www.youtube.com/watch?v=EI7sN1dAqFw',
                  articleLink: 'https://www.geeksforgeeks.org/stack-data-structure/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 23,
                  name: 'Queues',
                  leetCodeLink: 'https://leetcode.com/tag/queue/',
                  youtubeLink: 'https://www.youtube.com/watch?v=okr-XE8yTO8',
                  articleLink: 'https://www.geeksforgeeks.org/queue-data-structure/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 24,
                  name: 'Linked List',
                  leetCodeLink: 'https://leetcode.com/tag/linked-list/',
                  youtubeLink: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
                  articleLink: 'https://www.geeksforgeeks.org/data-structures/linked-list/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 25,
                  name: 'Trees',
                  leetCodeLink: 'https://leetcode.com/tag/tree/',
                  youtubeLink: 'https://www.youtube.com/watch?v=KcNt6v_56cc',
                  articleLink: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
                  level: 'HARD',
                }
              ]
            },
            {
              main_id: 3,
              mainTopic: 'Databases',
              subTopics: [
                {
                  sub_topic_id: 31,
                  name: 'SQL Basics',
                  leetCodeLink: 'https://leetcode.com/problemset/database/',
                  youtubeLink: 'https://www.youtube.com/watch?v=27axs9dO7AE',
                  articleLink: 'https://www.w3schools.com/sql/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 32,
                  name: 'Normalization',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=UrYLYV7WSHM',
                  articleLink: 'https://www.geeksforgeeks.org/database-normalization/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 33,
                  name: 'Joins in SQL',
                  leetCodeLink: 'https://leetcode.com/tag/join/',
                  youtubeLink: 'https://www.youtube.com/watch?v=9yeOJ0ZMUYw',
                  articleLink: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 34,
                  name: 'Transactions & ACID',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=DFg5Rz7Fn0A',
                  articleLink: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 35,
                  name: 'Indexing & Query Optimization',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=voTAx6tVj8I',
                  articleLink: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/',
                  level: 'HARD',
                }
              ]
            },
            {
              main_id: 4,
              mainTopic: 'Machine Learning',
              subTopics: [
                {
                  sub_topic_id: 41,
                  name: 'Supervised Learning',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
                  articleLink: 'https://www.geeksforgeeks.org/supervised-unsupervised-learning/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 42,
                  name: 'Unsupervised Learning',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=3MnQM5Nb4lc',
                  articleLink: 'https://www.geeksforgeeks.org/unsupervised-learning/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 43,
                  name: 'Regression Algorithms',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=J_LnPL3Qg70',
                  articleLink: 'https://www.geeksforgeeks.org/linear-regression-python-implementation/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 44,
                  name: 'Neural Networks Basics',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=aircAruvnKk',
                  articleLink: 'https://www.geeksforgeeks.org/artificial-neural-network/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 45,
                  name: 'Model Evaluation & Cross Validation',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=fSytzGwwBVw',
                  articleLink: 'https://www.geeksforgeeks.org/cross-validation-machine-learning/',
                  level: 'HARD',
                }
              ]
            },
            {
              main_id: 5,
              mainTopic: 'Operating Systems',
              subTopics: [
                {
                  sub_topic_id: 51,
                  name: 'Process Management',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=TCbFEgFajGU',
                  articleLink: 'https://www.geeksforgeeks.org/process-management/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 52,
                  name: 'Threading and Concurrency',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=ZQeeBhCxl7g',
                  articleLink: 'https://www.geeksforgeeks.org/multithreading-c-2/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 53,
                  name: 'Memory Management',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=4jGpYTu4fRY',
                  articleLink: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 54,
                  name: 'Deadlock & Scheduling',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=Y5KjK1kI7zY',
                  articleLink: 'https://www.geeksforgeeks.org/deadlock-in-operating-system/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 55,
                  name: 'Paging & Segmentation',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=ejfKDP9gAqY',
                  articleLink: 'https://www.geeksforgeeks.org/paging-in-operating-system/',
                  level: 'HARD',
                }
              ]
            },
            {
              main_id: 6,
              mainTopic: 'Newtworking',
              subTopics: [
                {
                  sub_topic_id: 61,
                  name: 'OSI Model',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=vv4y_uOneC0',
                  articleLink: 'https://www.geeksforgeeks.org/layers-of-osi-model/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 62,
                  name: 'IP Addressing',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=YjN0rk6A7OE',
                  articleLink: 'https://www.geeksforgeeks.org/internet-protocol-ip/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 63,
                  name: 'TCP vs UDP',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=Vdc8TCESIg8',
                  articleLink: 'https://www.geeksforgeeks.org/difference-between-tcp-and-udp/',
                  level: 'EASY',
                },
                {
                  sub_topic_id: 64,
                  name: 'DNS & HTTP/HTTPS',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=7_LPdttKXPc',
                  articleLink: 'https://www.geeksforgeeks.org/dns-domain-name-system/',
                  level: 'MEDIUM',
                },
                {
                  sub_topic_id: 65,
                  name: 'Subnetting & Routing',
                  leetCodeLink: '',
                  youtubeLink: 'https://www.youtube.com/watch?v=MWgF9KzJxyE',
                  articleLink: 'https://www.geeksforgeeks.org/subnetting-in-computer-network/',
                  level: 'HARD',
                }
              ]
            }
          ]
          ;

        // Insert topics into the database
        await DSATopic.insertMany(topics);
        console.log('DSA topics seeded successfully');
        mongoose.connection.close();
    })
    .catch(err => console.error('MongoDB connection error:', err));