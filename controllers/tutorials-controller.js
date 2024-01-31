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
                'tutorials.instructions',
                'tutorials.views',
                'tutorials.likes',
                'tutorials.image_path',
                'tutorials.create_time',
                'users.user_name'
            )
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send('Error getting all tutorials: ', error);
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
                'tutorials.instructions',
                'tutorials.views',
                'tutorials.likes',
                'tutorials.image_path',
                'tutorials.create_time',
                'users.user_name'
            )
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send('error getting tutorial: ', error)
    }
}

module.exports = {
    getAllTutorials,
    getOneTutorial
};