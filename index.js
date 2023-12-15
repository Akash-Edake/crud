require("./src/db/mongoose");
const express = require("express");
const records = require("./src/routers/records");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(records);

app.listen(port);
