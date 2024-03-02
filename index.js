const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.use("/", require("./src/routers/index"));
const PORT = process.env.PORT || 2003;

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
