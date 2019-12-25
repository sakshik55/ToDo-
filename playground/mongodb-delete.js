const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB');

  const db = client.db('TodoApp')

  db.collection('Todos').deleteMany({text:'eat food'}).then((result)=>{
    console.log('Todos');
    console.log(JSON.stringify(result, undefined,2));
  },(err)=>{
    console.log('Uanble to fetch todos', err);
  });


  client.close();
});
