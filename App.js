const express = require("express");
const cors = require("cors");
const db = require('./servidor/database/db');

const controllers = require("./servidor/controllers");
const verifyToken = require("./servidor/middlewares/verifyToken");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;