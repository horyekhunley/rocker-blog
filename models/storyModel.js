const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const storySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
    imageUrl: {
			type: String,
			required: true,
		},
    slug: {
			type: String,
			required: true,
      unique: true,
		},
    body: {
			type: String,
			required: true,
		},
    viewsCount: {
			type: Number,
      default: 0,
		},
		comments: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comments',
		}],
    category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
	
	},
	{ timestamps: true }
);

storySchema.plugin(uniqueValidator)

module.exports = mongoose.model('Category', storySchema)