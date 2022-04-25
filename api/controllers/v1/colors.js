const  express = require(`express`);
const data = require(`./data.json`);
const router = express.Router();
const colors = data.colors;

router.get("/", (req, res) => {
    res.send(colors)
})

router.get("/:id", (req, res) => {
    const id= req.params.id;
    const color= colors.find(function (color) {
        return color.id === id;
    });
    res.send(color);
})

module.exports = router;