const express = require('express');
const router = express.Router();
const User = require('../models/uder.model.js')
router.use(express.json());


router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save()
    res.json(req.body);
})

module.exports = router;