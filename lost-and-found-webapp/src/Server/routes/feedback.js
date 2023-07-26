
const express = require('express')
const router = express.Router()
const F_schema = require('../models/Fschema')

router.post('/', async (req, res) => {

    try {
        let feed = await F_schema.create({
            email: req.body.email,
            feedback: req.body.feedback
        });
        res.json({ feed });
    }
    catch (error) {
        console.log("error", error.message);
    }
    
})


module.exports = router;