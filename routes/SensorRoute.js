const express = require("express");
const {
    GetSensorData,
    PostSensorData,
    PutSensorData,
    DeleteSensorData
} = require("../controllers/SensorController.js");

const router = express.Router();

router.route("/:id").get(GetSensorData).put(PutSensorData).delete(DeleteSensorData).post(PostSensorData);

module.exports = router;