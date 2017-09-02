const mongodb = require('mongodb');
const flipacoin = require('flipacoin');

const url = 'mongodb://localhost:27017/floripajs';

mongodb.MongoClient
    .connect(url)
    .then(db => {
        console.log('YAY... There is a connection');

        for (let a = 0; a < 10; a++) {
            for (let b = 0; b < 10; b++) {
                for (let c = 0; c < 10; c++) {
                    const arr = [];
                    for (let d = 0; d < 10; d++) {
                        if (flipacoin('bool')) {
                            arr.push(d);
                        }
                    }

                    db.collection('main').insert({
                        _id: `a${a}b${b}c${c}`,
                        a, b, c, arr,
                    });
                }
            }
        }

        console.log('Done!!!');
        
        db.close();
    })
    .catch(error => {
        console.error(error);
    });