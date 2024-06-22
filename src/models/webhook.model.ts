import mongoose, { Schema } from "mongoose";

const webhookSchema = new Schema(
  {
    //define schema
    url: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    channel: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Webhook =
  mongoose.models.Webhook || mongoose.model("Webhook", webhookSchema);
export default Webhook;
