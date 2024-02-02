/*************
 * RESOLVERS *
 *************/
const TaskModel = require("../../models/task");

function getTask(args) {
  try {
    const tasks = TaskModel.find();
    let taskId = args.id;
    return tasks.find({ id: taskId });
  } catch (error) {
    return error;
  }
}

function getTasks(args) {
  try {
    let filter = {};
    if (args.done) {
      filter = { done: args.done };
      return (tasks = TaskModel.find(filter));
    } else {
      return (tasks = TaskModel.find(filter));
    }
  } catch (error) {
    return error;
  }
}

function addTask({ content }) {
  try {
    let task = new TaskModel({
      content: content,
      done: false,
    });

    task.save();
    return task;
  } catch (error) {
    return error;
  }
}

function updateTask({ id, content }) {
  try {
    let newTask = TaskModel.findByIdAndUpdate(id, {
      content: content,
    });
    return newTask;
  } catch (error) {
    return error;
  }
}

module.exports = { getTask, getTasks, addTask, updateTask };
