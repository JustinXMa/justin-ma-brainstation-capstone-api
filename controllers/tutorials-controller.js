const knex = require("knex")(require("../knexfile"));

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

const postNewTutorial = async (req, res) => {
    try {
        const newTutorial = req.body;
        const requiredFields = [
            'build_name',
            'category',
            'description',
            'instructions',
        ]
        for (let field of requiredFields) {
            if (!newTutorial[field]) {
                return res
                    .status(400)
                    .json({ message: `Missing '${field}' in request body` });
            }
        }
        newTutorial.build_creator = 'Alex'
        newTutorial.image_path = '/images/treehouse.jpeg'
        newTutorial.user_id = 3;
        await knex('tutorials').insert(newTutorial)
        res.status(200).send('successfully posted')
    } catch (error) {
        res.status(400).send(`${error}`)
    }
}

module.exports = {
    getAllTutorials,
    getOneTutorial,
    postNewTutorial
};