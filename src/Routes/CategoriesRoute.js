const User  = require('../Controller/UserController');
const express = require('express');
const router = express.Router();

router.get('/', User.getUser);

router.post('/', User.addUser);

router.put('/:id', User.updateUser);

router.delete('/:id', User.deleteUser);

module.exports = router;

