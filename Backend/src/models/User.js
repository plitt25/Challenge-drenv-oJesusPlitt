import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
});

export default mongoose.model("Users", UsersSchema);
