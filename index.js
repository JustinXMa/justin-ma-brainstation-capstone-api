const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require('path');

const PORT = process.env.PORT;

const usersRoutes = require("./routes/users-routes");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
