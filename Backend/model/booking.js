const mongoose = require('mongoose')


const bookingSchema =  mongoose.Schema(
	{
		email:{type: String},
		date: { type: String},
		slot: { type: String},
		typeBooking:{type:String}
	},
	{
		timestamps: true
	}

)


const model = mongoose.model('booking', bookingSchema)


module.exports = model

