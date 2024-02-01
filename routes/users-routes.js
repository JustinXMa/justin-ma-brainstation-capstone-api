const router = require("express").Router();
const usersController = require('../controllers/users-controller')

router.route('/login').post(usersController.loginUser);
router.route('/register').post(usersController.registerUser);

module.exports = router;