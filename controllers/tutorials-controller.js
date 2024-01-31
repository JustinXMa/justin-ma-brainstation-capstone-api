const knex = require("knex")(require("../knexfile"));

const getAllTutorials = async (_req, res) => {
    try {
        const data = await knex('tutorials')
            .join('tutorials', 'tutorial_id', 'users_id')
    } catch (error) {

    }
}