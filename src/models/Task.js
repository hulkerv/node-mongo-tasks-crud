import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true //*limpia el estring de espacios vacios al inicio y al final
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default:false,
  },
}, {
  timestamps: true,
  versionKey: false
})

export default model('Task', taskSchema)