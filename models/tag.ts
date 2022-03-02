import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Tag extends Document {
  variant: 'technology' | 'tool';
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const tagSchema = new Schema<Tag>(
  {
    variant: {
      required: true,
      type: String,
      enum: ['technology', 'tool'],
      index: true,
    },
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

export default (mongoose.models.Tag || model<Tag>('Tag', tagSchema, 'tags')) as Model<Tag>;
