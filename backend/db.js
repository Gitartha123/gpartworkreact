const mongo = require('mongoose');
const config = require('./config');
const mongourl = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbname}?authMechanism=DEFAULT`;

const connectTomongo = ()=> {
    mongo.connect(mongourl,()=>{
        console.log("Mongo is connected successfully");
    })
}

module.exports = connectTomongo;
