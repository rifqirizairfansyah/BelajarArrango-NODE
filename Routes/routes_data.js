var express = require('express');
var app = express();
var router = express.Router();
const path = require('path')
// Require Item model in our routes module

var controller_Harian = require("../Controller/tampil_data");

router.get("/getsemua",controller_Harian.getdatasemua);
router.get("/getsemuabyid",controller_Harian.getdatabyid);



module.exports = router;
