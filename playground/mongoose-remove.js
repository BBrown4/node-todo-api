const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ac4535cb326762e9c8306e7';

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5ac70c3219609e31842027d1').then((todo) => {
  console.log(todo);
});
