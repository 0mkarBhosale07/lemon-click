import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    //define schema
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    emailVerified: { type: String, required: true },
    username: { type: String, unique: true },
    creator_mode: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

usersSchema.index({ username: 1 }, { unique: true });

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);
export default Users;
