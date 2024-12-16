const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SensorSchema = new Schema({
    SensorId: Number,
    Name: String,
    Value: Number,
}, 
    { timestamps: true }
);

module.exports = mongoose.model("sensor", SensorSchema, "sensors");