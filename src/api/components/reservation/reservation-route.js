const express = require('express');

const reservationController = require('./reservation-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/reservation', route);

  route.get('/', reservationController.getreservations);

  route.post('/', reservationController.createreservation);

  // route.get('/:id', reservationController.getreservation);

  route.put('/:id', reservationController.updatereservation);

  route.delete('/:id', reservationController.deletereservation);
};
