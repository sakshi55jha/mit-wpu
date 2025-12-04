require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/form");

const app = express()

app.use(cors());
app.use(express.json());

app.use("/form", formRoutes);

app.listen(5000, () => console.log("Server running on 5000"));