
const SensorModel = require("../models/SensorModel.js");

exports.createSensor = async(sensor) => {
    return await SensorModel.create(sensor);
};

exports.getSensorById = async(id) => {
    return await SensorModel.findById(id);
};

exports.updateSensor = async (id, sensor) => {
    return await SensorModel.findByIdAndUpdate(id, sensor);
};

exports.deleteSensor = async (id) => {
    return await SensorModel.findByIdAndDelete(id);
}