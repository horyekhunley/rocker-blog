const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
    body: {
			type: String,
			required: true,
		},
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    story:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Story'
    }
	
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema)