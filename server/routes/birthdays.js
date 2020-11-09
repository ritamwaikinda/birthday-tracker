const router = require('express').Router();
const Birthday = require('../models/birthday.model');

// Add our routes here

router.route('/birthdays').get((req, res) => {
    Birthday.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json("Error: " + err));
});

router.route('/birthdays').post((req, res) => {
    const birthday = new Birthday(req.body)
    birthday.save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json("Error: " + err));
});

router.route('/birthdays/:id').get((req, res) => {
    Birthday.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json("Error: " + err));
});

router.route('/birthdays/:id').put((req, res) => {
    Birthday.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
});

router.route('/birthdays/:id').delete((req, res) => {
    Birthday.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json('Birthday deleted!');
      }
      res.status(204).json(data);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
});

module.exports = router;