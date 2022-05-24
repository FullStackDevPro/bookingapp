const router = require('express').Router();
const User = require('../model/User');
const Booking = require('../model/booking')
const { registerValidation, loginValidation, bookingValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { date } = require('@hapi/joi');


router.post('/register', async (req, res) => {

    // Validate User
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    // if existing user
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
        return res.status(400).json({error: 'Email exists', "status"});
        // return res.status(400).json({"status" : 400});
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPssword = await bcrypt.hash(req.body.password, salt);

    // Create new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPssword
    });

    try {
        const savedUser = await user.save();
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.json({ user: user._id,"status" : 200 ,redirect: 'Success', token });
    } catch (err) {
        res.status(500).json({"status" : 500});
    }
});


router.post('/login', async (req, res) => {

    // Validate User
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }

    // if existing email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({error: 'Email is not found', "status" : 401});
    }

    // Password correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({error: 'Invalid password', "status" : 400});
    }

    // Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({token: token, redirect: 'Sucsses', "status" :200});

});


// Booking 
router.post('/booking', async (req, res) => {


       const { error } = bookingValidation(req.body);
       if (error) {
            return res.status(400).json({error: error.details[0].message});
       }

       // if existing Appointemt
       const dateExist = await Booking.findOne({ date: req.body.date });
       const slotExist = await Booking.findOne({ slot: req.body.slot });

       if (dateExist && slotExist ) {
           return res.status(400).json({error: 'Appointment booked'});
       }

    

        // Create new User
        const booking = new Booking({
            email: req.body.email,
            date: req.body.date,
            slot: req.body.slot,
            type:req.body.typeBooking,
        });
    
        try {
            const savedBooking = await booking.save();
            const token = jwt.sign({_id: booking._id}, process.env.TOKEN_SECRET);
            res.json({ user: booking._id, "status" : 200 ,redirect: 'Success', token });
        } catch (err) {
            res.status(400).json({err : error.message , "status" : 400});
        }
 
});



router.get('/bookings', async(req, res) => {
    try {

        const bookings = await Booking.find({},{ 
            "date": 1,
            "slot": 1,
            "_id": 0
        });
        res.json(bookings);
    } catch (error) {
        res.json({message:err})
    }
});



module.exports = router;