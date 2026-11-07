import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 2,
            maxLength: 50
        },
        description: {
            type: String,
            trim: true,
            maxLength: 200
        }
    },
    {
        timestamps: true
    }
);

export const Category = mongoose.model('Category', categorySchema);
