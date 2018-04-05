const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ac4535cb326762e9c8306e7';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

// var id = '5ac5c07974388f397c101bdb-111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todoById) => {
//   console.log('TodoById:', todoById);
// }).catch((e) => {
//   console.log(e);
// });
