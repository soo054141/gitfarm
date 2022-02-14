/* eslint-disable import/extensions */
import mongoose from "mongoose";
import { ZERO } from "../default";

const { Schema } = mongoose;

const LevelSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    score: {
      type: Number,
      default: ZERO,
    },
    commits: {
      type: Number,
      default: ZERO,
    },
    issues: {
      type: Number,
      default: ZERO,
    },
    pulls: {
      type: Number,
      default: ZERO,
    },
  },
  { timestamps: true },
);

export default LevelSchema;
