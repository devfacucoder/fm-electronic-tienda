import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  name: {
    type: String,
    require: String,
    unique: true,
  },
});

const roleModel = model("Roles", roleSchema);

export default roleModel;
