const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require('path');
const multer = require('multer')


const PORT = process.env.PORT;

const usersRoutes = require("./routes/users-routes");
const tutorialsRoutes = require("./routes/tutorials-routes");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRoutes);
app.use('/api/tutorials', tutorialsRoutes);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
