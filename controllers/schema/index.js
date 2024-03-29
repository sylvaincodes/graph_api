/********************
 * SCHEMAS OF QUERY *
 ********************/

const { buildSchema } = require("graphql");

const schemas = buildSchema(`

  type Task {
    _id: ID
    id: ID
    content: String
    done: Boolean
  }
  type Query {
    allTasks(done: Boolean): [Task]
    task(id: String): Task
  }

  type Mutation{
    addTask(content: String!): Task!
    updateTask(id: String, content: String, done: Boolean): Task
  }

`);

module.exports = schemas;
