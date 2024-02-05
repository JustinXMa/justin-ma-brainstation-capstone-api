const knex = require("knex")(require("../knexfile"));
const multer = require('multer')

const getAllTutorials = async (_req, res) => {
    try {
        const data = await knex('tutorials')
            .join('users', 'users.id', 'tutorials.user_id')
            .select(
                'tutorials.id',
                'tutorials.build_name',
                'tutorials.build_creator',
                'tutorials.category',
                'tutorials.description',
                'tutorials.instructions',
                'tutorials.views',
                'tutorials.likes',
                'tutorials.image_path',
                'tutorials.create_time',
                'users.user_name'
            )
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error getting all tutorials: ${error}`);
    }
}

const getOneTutorial = async (req, res) => {
    try {
        const data = await knex('tutorials')
            .join('users', 'users.id', 'tutorials.user_id')
            .where({ 'tutorials.id': req.params.id })
            .select(
                'tutorials.id',
                'tutorials.build_name',
                'tutorials.build_creator',
                'tutorials.category',
                'tutorials.description',
                'tutorials.instructions',
                'tutorials.views',
                'tutorials.likes',
                'tutorials.image_path',
                'tutorials.create_time',
                'users.user_name'
            )
        res.status(200).json(data[0])
    } catch (error) {
        res.status(400).send(`error getting tutorial: ${error}`)
    }
}

// define storage for multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const postNewTutorial = async (req, res) => {
    try {
        const newTutorial = req.body;
        newTutorial.image_path = req.file.path;
        const requiredFields = [
            'build_name',
            'build_creator',
            'category',
            'description',
            'instructions',
            'image_path',
            'user_id'
        ]
        for (let field of requiredFields) {
            if (!newTutorial[field]) {
                return res
                    .status(400)
                    .json({ message: `Missing '${field}' in request body` });
            }
        }

        await knex('tutorials').insert(newTutorial)
        res.status(200).send('successfully posted')
    } catch (error) {
        res.status(400).send(`${error}`)
    }
}

module.exports = {
    getAllTutorials,
    getOneTutorial,
    postNewTutorial,
    upload
};