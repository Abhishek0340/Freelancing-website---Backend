
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();


// Register user
router.post('/signup', async (req, res) => {
  const { username, mobile, email, password, role } = req.body;

  if (!username || !mobile || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email already registered.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      mobile,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });

  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;