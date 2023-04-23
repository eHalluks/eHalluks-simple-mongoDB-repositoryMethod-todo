const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect()
    .then(respons => {
        console.log("")
        console.log("start connection")
    })

const db = client.db('todo_Repository');
const todos = db.collection('todos');

module.exports = {db, todos, client};