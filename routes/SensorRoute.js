const express = require("express");
const {
    getSensorData,
    postSensorData,
    putSensorData,
    deleteSensorData
} = require("../controllers/SensorController.js");

const router = express.Router();

router.route("/:id").get(getSensorData).put(putSensorData).delete(deleteSensorData);
router.route("/sensor/").post(postSensorData);

module.exports = router;