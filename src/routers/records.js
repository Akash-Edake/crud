const express = require("express");
const router = express.Router();
const { findAll,add,deleteReconds,updateRecords } = require("../controllers/records");

router.get("/recodrs", findAll);
router.post("/add", add);
router.post("/delete", deleteReconds);
router.put("/update", updateRecords);

module.exports = router;
