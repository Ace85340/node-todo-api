const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove ({}) remove multiple

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('59a0fc71845104e0304398e0').then((result) => {
  console.log(result);
});
