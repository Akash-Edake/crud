const express = require("express");
const router = express.Router();
const {
  findAll,
  add,
  deleteReconds,
  updateRecords,
  pagination,
  weather,
} = require("../controllers/records");

router.get("/records", findAll);
router.post("/pagination", pagination);
router.post("/add", add);
router.post("/delete", deleteReconds);
router.put("/update", updateRecords);

router.post("/weather", weather);

module.exports = router;
