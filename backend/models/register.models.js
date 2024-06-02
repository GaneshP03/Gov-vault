import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true, 
        trim: true, 
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, 
        trim: true, 
        match: [/.+@.+\..+/, 'Please enter a valid email address'] 
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

const registerCollection = new mongoose.model('register',RegisterSchema);

export default registerCollection;