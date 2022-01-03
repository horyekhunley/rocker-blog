const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
	{
    videoId: {
			type: String,
			required: true,
		},
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    viewsCount: {
			type: Number,
      default: 0,
		},
    title:{
      type: String,
      required: true
    }
	
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema)