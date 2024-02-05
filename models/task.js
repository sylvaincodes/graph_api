const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
