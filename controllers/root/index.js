/************************************
 * MAPPING API ENDPOINT WITH RESOLVERS *
 ************************************/

const { getTask, getTasks, addTask, updateTask } = require("../resolver");

const root = {
  task: getTask,
  allTaks: getTasks,
  addTask: addTask,
  updateTask: updateTask,
};

module.exports = root;
