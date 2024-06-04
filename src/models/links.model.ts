import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    //define schema
    link: {
      type: String,
      requried: true,
    },
    redirection_link: {
      type: String,
      default: null,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Links = mongoose.models.Links || mongoose.model("Links", linkSchema);
export default Links;
