/************************************
 * MAPPING API ENDPOINT WITH RESOLVERS *
 ************************************/

const { getTask, getTasks, addTask, updateTask } = require("../resolver");

const root = {
  task: getTask,
  allTasks: getTasks,
  addTask: addTask,
  updateTask: updateTask,
};

module.exports = root;
