import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const blogSchema = Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Blog', blogSchema);
