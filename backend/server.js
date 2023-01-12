const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { userRoutes } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
connect();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is running at", port);
});
