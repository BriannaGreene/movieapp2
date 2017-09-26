const express = require('express');
const router = express.Router();
const knex = require('../knex')

// get list
router.get('/', function(req, res, next) {
  console.log('hello')
  knex('director')
    .select('name', 'nationality')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch((err) =>  next(err))
});

// get by id
router.get('/:id', function (req, res, next) {
  const id = req.params.id

  knex('director')
    .select('id', 'name', 'nationality')
    .orderBy('id')
    .where('id', id)
    .then((items) => {
      if (items.length <1) {
        return res.sendStatus(404)
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
    .catch((err) => next(err))
})

// post
router.post('/', function(req, res, next) {

  knex('director')
    .insert({ id: req.body.id, name: req.body.name, nationality: req.body.nationality })
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

// patch
router.patch('/:id', function(req, res, next) {
  const id = req.params.id

  knex('director')
    .update({ name: req.body.name, nationality: req.body.nationality })
    .where('id', id)
    .then((rowsAffected) => {
      if (rowsAffected !== 1) {
        return res.sendStatus(404)
      }
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

// delete
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('director')
    .del()
    .where('id', id)
    .then((rowsAffected) => {
      if (rowsAffected !== 1) {
        return res.sendStatus(404)
      }
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

module.exports = router;
