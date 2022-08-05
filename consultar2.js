const mongocliente = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ssioco:99122608880@adsi2364482.rz6w0.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});