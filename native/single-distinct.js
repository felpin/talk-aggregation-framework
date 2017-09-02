const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/floripajs';

mongodb.MongoClient
    .connect(url)
    .then(db => {
        console.log('YAY... There is a connection');

        db.collection('main').distinct('a').then(r => console.log(r));

        db.close();
    })
    .catch(error => {
        console.error(error);
    });