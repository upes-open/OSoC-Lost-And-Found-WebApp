
const express = require('express')
const router = express.Router()
const F_schema = require('../models/Fschema')

router.post('/', async (req, res) => {

    let feed = await F_schema.create({
        email : req.body.email,
        feedback : req.body.feedback
    });

    res.json({feed});
})


module.exports = router;