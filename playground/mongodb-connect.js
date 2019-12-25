//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB');

  const db = client.db('TodoApp')

  // // db.collection('Todos').insertOne({
  // //   text:'lets create todo app',
  // //   completed: false
  // // }, (err,result)=>{
  // //   if(err){
  // //     return console.log('Unable to insert todo',err);
  // //   }
  // //   console.log(JSON.stringify(result.ops,undefined,2));
  // // });
  //
  // db.collection('Users').insertOne({
  //   name:'chahak',
  //   age: 20,
  //   location:'gurgaon'
  // }, (err,result) =>{
  //    if(err){
  //      return consol.log('Unable to add');
  //    }
  //    console.log(JSON.stringify(result.ops,undefined,2));
  // });

  client.close();
});
