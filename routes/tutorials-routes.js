const router = require("express").Router();
const tutorialsController = require("../controllers/tutorials-controller")

router.route('/').get(tutorialsController.getAllTutorials);
router.route('/:id').get(tutorialsController.getOneTutorial);

module.exports = router;