import { timeStamp } from "console";
import mongoose from "../db/connections.js";
const Schema = mongoose.Schema;

const Groceries = new Schema(
  {
    name: String,
    deleted: Boolean,
    checked: Boolean,
    recipe: String,
  },
  { timestamps: true }
);

export default mongoose.model("Groceries", Groceries);
