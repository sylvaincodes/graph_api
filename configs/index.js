/********************************************************************************************************************************
 * DEFINE THE CONNECTION INFORMATION OF OUR MONGODB
 * AND WE PROVIDE A PROMISE FUNCTION THAT CAN BE
 * USED ANYWHERE IN THE PROJECT. *
 ********************************************************************************************************************************/

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
dotenv.config();

const dbConnect = mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const db = mongoose.connection;

const middlewares = (app, schema, root) => {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );
};

module.exports = { db, dbConnect, middlewares };
