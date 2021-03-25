const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricsSchema = new Schema({});

module.exports = mongoose.model("Metrics", metricsSchema);