// core modules
 const {getDb} = require('../utility/database');

exports.user = class user {
    constructor(username , password , mobileno) {
        this.username = username;
        this.password = password;
        this.mobileno = mobileno;
        this.favorite = [];
    }

    adduser() {
        const db = getDb();
        return db.collection('user').insertOne(this);
    }

    static loginusser(username , password) {
        const db = getDb();
        const loggeduser = db.collection('user').findOne({ "username": username, "password": password });
        return loggeduser; }

}