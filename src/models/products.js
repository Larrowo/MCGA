const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: {
    type: string,
  },
  name: {
    type: string,
    required: true,
  },
  isDeleted: {
    type: boolean,
    default: false,
  },
});

module.exports = mongoose.model("Profiles", productsSchema);
