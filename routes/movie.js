const express = require('express');
const router = express.Router();
const knex = require('../knex')

// get list
router.get('/', function(req, res, next) {
  console.log('hello')
  knex('movie')
    .select('title', 'year')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch((err) =>  next(err))
});

// get by id
router.get('/:id', function (req, res, next) {
  const id = req.params.id

  knex('movie')
    .select('id', 'title', 'year')
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

  knex('movie')
    .insert({ id: req.body.id, title: req.body.title, year: req.body.year, director_id: req.body.director_id })
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

// patch
router.patch('/:id', function(req, res, next) {
  const id = req.params.id

  knex('movie')
    .update({title: req.body.title, year: req.body.year, director_id: req.body.director_id})
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
  knex('movie')
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
