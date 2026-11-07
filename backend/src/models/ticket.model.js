import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 100
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 5,
            maxLength: 1000
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        priority: {
            type: String,
            required: true,
            enum: ['Low', 'Medium', 'High'],
            default: 'Low'
        },
        status: {
            type: String,
            required: true,
            enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
            default: 'Open'
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Ticket = mongoose.model('Ticket', ticketSchema);
