import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  url: { type: String, required: true },
  androidIntentUrl: { type: String, required: true },
  iosUrl: { type: String, required: true },
  fallbackUrl: { type: String, required: true },
});

const profileSchema = new Schema(
  {
    //define schema
    username: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    links: [linkSchema],
    userId: { type: String, required: true },
    displayImage: { type: String, required: true },
    profileImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Profiles =
  mongoose.models.Profiles || mongoose.model("Profiles", profileSchema);
export default Profiles;
