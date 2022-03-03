import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Tag extends Document {
  variant: 'language' | 'tool' | 'other';
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const tagSchema = new Schema<Tag>(
  {
    variant: {
      required: true,
      type: String,
      enum: ['language', 'tool', 'other'],
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
