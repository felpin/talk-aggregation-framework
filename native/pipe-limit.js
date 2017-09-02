const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/floripajs';

mongodb.MongoClient
    .connect(url)
    .then(db => {
        console.log('YAY... There is a connection');

        db.collection('main')
            .aggregate([
                { $match: { a: { $in: [3, 8] }, b: 7 } },
                { $project: { _id: 0, a: 1, c: 1 } },
                { $sort: { c: 1 } },
                { $skip: 10 },
                { $limit: 4 }
            ])
            .forEach(item => console.log(item));

        db.close();
    })
    .catch(error => {
        console.error(error);
    });