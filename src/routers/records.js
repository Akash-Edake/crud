const express = require("express");
const router = express.Router();
const {
  findAll,
  add,
  deleteReconds,
  updateRecords,
  pagination,
} = require("../controllers/records");

router.get("/records", findAll);
router.post("/pagination", pagination);
router.post("/add", add);
router.post("/delete", deleteReconds);
router.put("/update", updateRecords);

module.exports = router;
