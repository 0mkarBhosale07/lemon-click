import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    //define schema
    platform: { type: String, required: true },
    name: { type: String, default: null },
    originalUrl: { type: String, required: true },
    androidIntentUrl: { type: String },
    iosUrl: { type: String },
    fallbackUrl: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Links = mongoose.models.Links || mongoose.model("Links", linkSchema);
export default Links;
