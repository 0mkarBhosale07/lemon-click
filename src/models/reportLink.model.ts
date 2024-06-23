import mongoose, { Schema } from "mongoose";

const reportLinkSchema = new Schema(
  {
    link: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ReportLink =
  mongoose.models.ReportLink || mongoose.model("ReportLink", reportLinkSchema);
export default ReportLink;
