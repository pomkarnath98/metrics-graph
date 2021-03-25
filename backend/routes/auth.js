const express = require("express");
const router = express.Router();

const { Data } = require("../controllers/controllers");

router.get("/data", Data);

module.exports = router;