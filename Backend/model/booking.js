const mongoose = require('mongoose')


const bookingSchema =  mongoose.Schema(
	{
		email:{type: String},
		date: { type: String},
		slot: { type: String},
		selecttype:{type: String},
	},
	{
		timestamps: true
	}

)

const login =  mongoose.Schema(
	{
		email:{type: String},
	},

)


const model = mongoose.model('booking', bookingSchema)


module.exports = model

