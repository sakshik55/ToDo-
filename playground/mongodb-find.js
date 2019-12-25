const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB');

  const db = client.db('TodoApp')

  // db.collection('Todos').find({_id: new ObjectId('5e01f0e5953c78d9468df029')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // },(err)=>{
  //   console.log('Uanble to fetch todos', err);
  // });

  db.collection('Users').find({name:'sakshi'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Uanble to fetch todos', err);
  });

  //client.close();
});
