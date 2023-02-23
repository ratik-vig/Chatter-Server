const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv')

dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fcxb4gp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
});


module.exports = client
