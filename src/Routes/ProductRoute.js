const Product  = require('../Controller/ProductController');
const express = require('express');
const router = express.Router();

router.get('/', Product.getUser);

// router.post('/', User.addUser);

// router.put('/:id', User.updateUser);

// router.delete('/:id', User.deleteUser);

module.exports = router;

