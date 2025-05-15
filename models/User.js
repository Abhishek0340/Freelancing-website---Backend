import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, lowercase: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['freelancer', 'client'], required: true }
}, { timestamps: true });

export default mongoose.model('User', userSchema);