const express = require("express");
const crypto = require("crypto");
// const { dbConnect, middlewares } = require("./configs/index");
const schema = require("./controllers/schema/index");
const root = require("./controllers/root/index");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`

type Task{
    id: ID!
    content: String
    done: Boolean
}

enum Status{
    COMPLETED
    TODO
}

type Query{
    totalDays: Int!
    getTaks: [task]!
}
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});

// // Initialiser l'application
// const app = express();

// // Configurer les Middlewares
// middlewares(app, schema, root);

// app.listen(4000);
// console.log("Running a GraphQL API server at http://localhost:4000/graphql");
