var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');
var {ObjectId} = require('mongodb');
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e)=>{
    res.send(e);
  });
});

app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.send(e);
  })
});

app.get('/todos/:id', (req,res)=>{
  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) =>{
    if(!todo){
        return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

app.listen(3000, ()=>{
  console.log('started on port 3000');
})
