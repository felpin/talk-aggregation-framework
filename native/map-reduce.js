const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/floripajs';

mongodb.MongoClient
    .connect(url)
    .then(db => {
        console.log('YAY... There is a connection');

        db.collection('main').mapReduce(
            // MAP
            function () {
                emit(this.a, this.arr.length);
            },
            // REDUCE
            function (key, values) {
                return Array.sum(values)
            },
            // PARAMS
            { out: { replace: 'secondary' } }
        )
            .then(() => db.collection('secondary').find().forEach(item => console.log(item)))
            .then(() => db.close())
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });