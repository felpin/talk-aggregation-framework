const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/floripajs';

mongoose
    .connect(url, { useMongoClient: true })
    .then((db) => {
        console.log('YAY... There is a connection');

        // TODO: Do something
    })
    .catch(error => {
        console.error(error);
    });