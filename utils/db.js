const mongoose = require('mongoose');
mongoose.Promise = require('promise');

export default function (url, done){
    const options = {
        useMongoClient: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0
    };
    mongoose.connect(url, options, (err, db) => {
        if(err) return done(err);
        done();
    });
}