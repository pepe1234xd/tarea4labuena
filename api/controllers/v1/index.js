const express = require (`express`);
const colors = require(`./colors`);

const v1 = express.Router();

//subroutes
v1.use(`/colors`,colors)

module.exports = v1;