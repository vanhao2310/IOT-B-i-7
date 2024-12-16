const SensorSchema = require("../models/SensorModel.js");
const SensorService = require("../services/SensorService.js");

// Lấy dữ liệu cảm biến
exports.getSensorData = async (req, res) => {
    try {
        const sensors = await SensorService.getSensorById(req.params.id);
        res.json({ data: sensors, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Thêm mới dữ liệu cảm biến
exports.postSensorData = async (req, res) => {
    try {
        const sensor = await SensorService.createSensor(req.body);
        res.json({ data: sensor, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Cập nhật dữ liệu cảm biến theo ID
exports.putSensorData = async (req, res) => {
    try {
        const sensor = await SensorService.updateSensor(req.params.id, req.body);
        if (!sensor) {
            res.status(404).json({ message: `Không tìm thấy cảm biến có mã id ${req.params.id}`, status: "error" });
        } else {
            res.json({ data: sensor, status: "success" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Xóa dữ liệu cảm biến theo ID
exports.deleteSensorData = async (req, res) => {
    try {
        const sensor = await SensorService.deleteSensor(req.params.id);
        if (!sensor) {
            res.status(404).json({ message: `Không tìm thấy cảm biến có mã id ${req.params.id}`, status: "error" });
        } else {
            res.json({ message: `Đã xóa cảm biến có mã id ${req.params.id}`, status: "success" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
