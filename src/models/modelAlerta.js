const mongoose = require("mongoose");


// Define el esquema para SensorData
const userSchema = mongoose.Schema({
    timestamp: {
      type: Date,
      required: true,
    },
    sensorId: {
      type: String,
      required: true
    },
    nombreSensor: {
      type: String,
      required: true
    },
    mensaje: {
      type: String,
    }
});




  
module.exports = mongoose.model('Alerta', userSchema);