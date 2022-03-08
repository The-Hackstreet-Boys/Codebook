import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { User } from '@/models/user';

interface BaseMedia extends Document {
    author: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Image extends BaseMedia {
    type: 'image';
    url: string;
    width: number;
    height: number;
}

export interface Code extends BaseMedia {
    type: 'code';
    text: string;
    language: string;
}

export type Media = Image | Code;

const mediaSchema = new Schema<Media>(
    {
        type: { required: true, type: String, enum:['image','code']},
        author: { required:true, type: String, ref: 'User', index: true },
         url: String, width: Number, height: Number ,
         text: String, language: String,
    },
    { timestamps: true},
);

const MediaModel = (mongoose.models.Media ??
 model<Media>('Media', mediaSchema, 'media')) as Model<Media>;

 export default MediaModel;