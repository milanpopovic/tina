const express = require("express");
const path = require('path');
const recordRoutes = express.Router();
recordRoutes.route("/admin").get(function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
   });
module.exports = recordRoutes;