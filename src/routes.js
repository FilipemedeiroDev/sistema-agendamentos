const { Router } = require('express');

const BookingControler = require('./controllers/bookingControlller');


const routes = Router();

routes.get('/bookings', BookingControler.listAllBookins)
routes.post('/bookings', BookingControler.registerBooking)

module.exports = routes;