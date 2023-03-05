const mongoose = require("mongoose");
const QueriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Queries = mongoose.model("Queries", QueriesSchema);

module.exports = { Queries };
