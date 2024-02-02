const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: false,
      unique: true,
    },
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
