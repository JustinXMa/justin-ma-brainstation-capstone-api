const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user:
const registerUser = async (req, res) => {
    const { user_name, user_email, user_password } = req.body;
    if (!user_name || !user_email || !user_password) {
        return res.status(400).send('All fields are required to register')
    }
    const hashedPassword = bcrypt.hashSync(user_password)
    const newUser = {
        user_name,
        user_email,
        user_password: hashedPassword
    };
    try {
        await knex('users').insert(newUser);
        res.status(200).send('user registered successfully')
    } catch (error) {
        res.status(400).send(`user registration failed: ${error}`)
    }
}

// Login user:
const loginUser = async (req, res) => {
    const { user_name, user_email, user_password } = req.body;
    if ((!user_name && !user_email) || !user_password) {
        return res.status(400).send('Please make sure all fields are filled')
    }
}

module.exports = {
    registerUser,
}