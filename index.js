const express = require("express");
const crypto = require("crypto");
const { dbConnect, middlewares } = require("./configs/index");
const schema = require("./controllers/schema/index");
const root = require("./controllers/root/index");

// Initialiser l'application
const app = express();

// Configurer les Middlewares
middlewares(app, schema, root);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
