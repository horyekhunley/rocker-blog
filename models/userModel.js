const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "user",
			enum: ["user", "admin"],
		},
		password: {
			type: String,
			required: true,
		},
		verificationCode: {
			type: Number,
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		passwordResetCode: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema)