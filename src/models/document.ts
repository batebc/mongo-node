import { Schema, model } from "mongoose";
import { Document } from "../interfaces/doc.interface";

const DocumentSchema = new Schema<Document>(
  {
    user: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
      dni: {
        type: String,
      },
    },
    procedure: {
      type: String,
    },
    subject: {
      type: String,
    },
    type_document: {
      type: String,
    },
    num_folio: {
      type: Number,
    },
    decription: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DocumentModel = model("document", DocumentSchema);

export { DocumentModel };
