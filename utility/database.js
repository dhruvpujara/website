const mongo = require('mongodb');

const mongoclient = mongo.MongoClient;

const url = `mongodb+srv://DHRUV:292005@dhruv.r88dy.mongodb.net/?retryWrites=true&w=majority&appName=DHRUV`;

let _db;

const MongoConnect = (callback) => {
    mongoclient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((client) => {
            _db = client.db("user");
            callback(client);
        })
        .catch((err) => {
            console.error('Failed to connect to the database. Error:', err);
        });
};

const getDb = () => {
    if (!_db) {
        throw new Error('Database not initialized');
    }
    return _db;
};

exports.getDb = getDb;
exports.MongoConnect = MongoConnect;