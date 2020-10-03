const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.bbk7z.mongodb.net:27017,cluster0-shard-00-01.bbk7z.mongodb.net:27017,cluster0-shard-00-02.bbk7z.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-1227kd-shard-0&authSource=admin&retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const eventCollections = client.db(process.env.DB_NAME).collection("events");
    console.log('sfsfds')

    app.post('/addEvent', (req, res) => {
        const events = req.body;
        // eventCollections.insertMany(events)
        //     .then(result => {
        //         res.send(result.insertedCount > 0);
        //     })
    });

    app.get('/events', (req, res) => { // get all events
        eventCollections.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    });
});

app.listen(5000);
