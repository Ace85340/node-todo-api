const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// ID 599a2d2ad1c3028c201df0e8
// var todo id = '599a2d2ad1c3028c201df0e811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

// user id 5999cadbd6037e7c1e64401f
const id = '5999cadbd6037e7c1e64401f';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User', user);
}, (e) => {
  console.log(e);
});
