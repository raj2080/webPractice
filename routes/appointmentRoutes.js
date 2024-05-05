const express = require ("express")
const appointmentController = require ("../controllers/appointmentController")


const router = express.Router()

router.route("/appointments").post(appointmentController.addAppointment)

module.exports = router;