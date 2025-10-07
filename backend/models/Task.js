import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
title: { type: String, required: true },
description: { type: String },
status: { type: String, enum: ['todo','in-progress','done'], default: 'todo' },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Task', TaskSchema);