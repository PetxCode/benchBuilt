import mongoose from "mongoose";

interface iTitle {
  name: string;
}

interface iTitleData extends iTitle, mongoose.Document {}

const modelSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true },
);

export default mongoose.model<iTitleData>("models", modelSchema);
