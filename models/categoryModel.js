const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const categorySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
      unique: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	
	},
	{ timestamps: true }
)

categorySchema.plugin(uniqueValidator)

module.exports = mongoose.model('Category', categorySchema)