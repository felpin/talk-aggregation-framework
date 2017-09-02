const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/floripajs';

mongodb.MongoClient
    .connect(url)
    .then(db => {
        console.log('YAY... There is a connection');

        db.collection('main')
            .aggregate([
                { $match: { a: 7 } },
                { $project: { _id: 0, a: 1, b: 1, lengthOfArr: { $size: '$arr' } } },
                {
                    $group: {
                        _id: '$b',
                        count: { $sum: 1 },
                        averageLength: { $avg: '$lengthOfArr' }

                    }
                },
                { $sort: { averageLength: 1 } }
            ])
            .forEach(item => console.log(item));

        db.close();
    })
    .catch(error => {
        console.error(error);
    });