import { Schema, model } from "mongoose";

const StorageSchema = new Schema<Storage>({
  filename: {
    type: "string",
  },
  path: {
    type: "string",
  },
  idUser: { type: "string" }
},
  {
    timestamps: true,
    versionKey: false,
  }

);

const StorageModel = model("storage", StorageSchema);

export { StorageModel };