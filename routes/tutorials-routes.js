const router = require("express").Router();
const tutorialsController = require("../controllers/tutorials-controller")

router.route('/').get(tutorialsController.getAllTutorials);
router.route('/:id').get(tutorialsController.getOneTutorial);
router.route('/upload').post(tutorialsController.upload.single('image'), tutorialsController.postNewTutorial);

module.exports = router;