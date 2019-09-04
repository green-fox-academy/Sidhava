'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
  .get('/groot?received=somemessage')
  .send({'received': 'somemessage', 'translated': 'I am Groot!'})
  .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {'received': 'somemessage', 'translated': 'I am Groot!'});
      t.equal(res.status, 200);
      t.end();
  });
});
