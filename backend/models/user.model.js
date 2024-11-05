import mongoose from "mongoose";

// Custom validation for email
const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const isEmail = {
    validator: (email) => emailRegExp.test(email),
    message: 'Invalid email format',
};

const emailIsUnique = {
    async validator(email) {
        const user = await this.constructor.findOne({ email });
        return !user || this._id.equals(user._id); // Check for existing user
    },
    message: 'Email already in use',
};

// Define User Schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "An email address is required."],
        validate: [isEmail, emailIsUnique],
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model('User', UserSchema);
