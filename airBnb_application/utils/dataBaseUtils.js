const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
 
const MONGO_URL = "mongodb+srv://root:root@rakhi.je9n9.mongodb.net/?retryWrites=true&w=majority&appName=rakhi"

let _db;
const mongoConnection = (callback) =>{
    MongoClient.connect(MONGO_URL).then(client =>{
        callback();
        _db = client.db('airbnb');
    }).catch(err=>{
        console.log('error while connectiong to mongodb', err)
    })
}


const getDB = ()=>{
    if(!_db){
        throw new Error('mongo not connected')
    }
    return _db;
}

exports.mongoConnection = mongoConnection;
exports.getDB = getDB;