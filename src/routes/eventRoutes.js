const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Get all events
router.get('/', eventController.getAllEvents);

// Get a single event by ID
router.get('/:id', eventController.getEventById);

// Create a new event
router.post('/', eventController.createEvent);

// Delete an event by ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
