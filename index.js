require("./src/db/mongoose");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // * help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
const compression = require('compression') //* decrease the size of the response body and hence increase the speed of a web app
const records = require("./src/routers/records");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors())
app.use(compression())
app.use(helmet());
app.use(express.json());
app.use(records);

const server = app.listen(port);


//* ------------ Graceful shutdown ------------
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
    });
  });
