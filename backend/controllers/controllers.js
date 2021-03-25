const Metrics = require("../models/Metrics");

const Data = async (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = 1;

    let reqdata;

    await Metrics.find({})
        .then((trans) => (reqdata = trans))
        .catch((err) => res.status(400).json("Error: " + err));

    const results = {};

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < reqdata.length) {
        results.next = {
            page: page + 1,
        };
    }

    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
        };
    }

    results.current = reqdata.slice(startIndex, endIndex);
    res.json(results);
};

module.exports = {
    Data
};