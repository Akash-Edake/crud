require("./src/db/mongoose");
const express = require("express");
const cors = require("cors");
const records = require("./src/routers/records");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors())
app.use(express.json());
app.use(records);

app.listen(port);
