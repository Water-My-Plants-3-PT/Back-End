const router = require("express").Router();

const Plants = require("./plants-model.js");
const restricted = require("../auth/restricted-middleware.js");

// Get 
// Get all plants
router.get("/", restricted, (req, res) => {
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
    res.status(500).json({ message: 'Failed to create new plant' });
  });
});


// Update
// Update plant
router.put("/:id", (req, res) => {
  const { id } = req.params;

  Plants.update(id, req.body).then(action => {
    res.status(200).json({ success: 'Plant Updated!', info: req.body });
  });
}); 

// Delete
// Delete plant
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Plants.get(id).then(plant => {
    action
      ? Plants.remove(id).then(deleted => {
          deleted
            ? res
                .status(200)
                .json({ success: `Plant ${id} was deleted!`, info: plant })
            : null;
        })
      : null;
  });
}); 

module.exports = router;