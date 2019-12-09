const express = require('express');
const router = express.Router();
// const User = require('../models/user');

router.post('/admin', (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'No way'
                })
            }
             
        })
});

module.exports = router;