const express = require('express');
const router = express.Router();
// const router = require("express").Router();

const Plants = require("./plants-model.js");

// Get 
// Get all plants
router.get("/", (req, res) => {
  Plants.find()
    .then(plants => {
      res.status(200).json(plants);
    })
    .catch(err => res.send(err));
});

// Get plant by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Plants.findById(id)
  .then(plant => {
    if (plant) {
      res.json(plant);
    } else {
      res.status(404).json({ message: 'Could not find plant with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get plant' });
  });
});


// Post
// Post a plant
router.post('/', (req, res) => {
  const plantData = req.body;

  Plants.add(plantData)
  .then(plant => {
    res.status(201).json(plant);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new plant', err });
  });
});


// Update
// Update plant

router.put('/:id', (req, res) => {
  const changes = req.body;

  Plants.update(req.params.id, changes)
  .then(plant => {
    if (plant) {
      res.status(200).json({ message: "Plant updated", }, plant);
    } else {
      res.status(404).json({ message: 'The plant could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error updating plant',
    });
  });
});


// Delete
// Delete plant

router.delete('/:id', (req, res) => {
  Plants.remove(req.params.id)

  .then(plant => {
    if (plant > 0) {
      res.status(200).json({ message: 'The plant died' });
    } else {
      res.status(404).json({ message: 'The plant could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error removing the hdead plant',
    });
  });
});

module.exports = router;