import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Tag extends Document {
  name: string;
}

const tagSchema = new Schema<Tag>(
  {
    name: {
      required: true,
      type: String,
      maxlength: 15,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export default (mongoose.models.Tag ||
  model<Tag>('Tag', tagSchema, 'tags')) as Model<Tag>;
