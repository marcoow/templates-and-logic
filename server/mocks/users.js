/*jshint node:true*/
const DATA = [
  {
    id: '1',
    type: 'users',
    attributes: {
      'first-name': 'Jose',
      'last-name': 'Mourinho',
      age: 53,
      'is-active': true,
      'is-admin': false
    }
  },
  {
    id: '2',
    type: 'users',
    attributes: {
      'first-name': 'Pep',
      'last-name': 'Guardiola',
      age: 45,
      'is-active': true,
      'is-admin': false
    }
  },
  {
    id: '3',
    type: 'users',
    attributes: {
      'first-name': 'Jupp',
      'last-name': 'Heynckes',
      age: 71,
      'is-active': false,
      'is-admin': true
    }
  }
]

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'data': DATA
    });
  });

  app.use('/api/users', usersRouter);
};
