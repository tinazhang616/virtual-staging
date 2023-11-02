const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const accountsRouter = require("./accounts/accounts.router");
const shoppingRouter = require("./shopping/shopping.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/shopping", shoppingRouter);
app.use("/accounts", accountsRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
