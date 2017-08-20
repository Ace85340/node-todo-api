// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to DB', err);
  }

  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5999188bf751a826197b3f9d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5997d1cfea5c833728711433')
    }, {
      $set: {
        name: 'Ryan'
    }
    }, {
      returnOriginal: false
    }
  ).then((result) => {
      console.log(result);
    }
  );

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5997d1cfea5c833728711433')
    }, {
      $inc: {
        age: 1
    }
    }, {
      returnOriginal: false
    }
  ).then((result) => {
      console.log(result);
    }
  );

  // db.close();
});
