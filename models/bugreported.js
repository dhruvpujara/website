const {getDb} = require('../utility/database');


exports.bugsreported = class bugsreported {
    constructor(name, contact, description) {
        this.name = name;
        this.contact = contact;
        this.description = description;
    }

    addbugreported() {
        const db = getDb();
        return db.collection('bugsreported').insertOne(this);
    }

    // static getBugsReported() {
    //     const db = getDb();
    //     return db.collection('bugsreported').find().toArray();
    // }
}