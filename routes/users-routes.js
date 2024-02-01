const router = require("express").Router();
const usersController = require('../controllers/users-controller')

router.route('/register')
    .post(usersController.registerUser)
    .post(usersController.loginUser);

module.exports = router;