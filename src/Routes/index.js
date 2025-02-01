const express = require('express');
const  User  = require('./UserRoute')
const Product = require('./ProductRoute')

const router = express.Router();
router.use('/users', User)

router.use('/products', Product)

module.exports = router;
