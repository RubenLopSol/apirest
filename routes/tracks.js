const express = require("express");

const router = express.Router(); // funcion de expres para controlar rutas.-
const { getItems, getItem, createItem } = require("../controllers/tracks");

//Declarar routas no dynamic
// router.get("/", (req, res) => {
//   const data = ["hola", "ruben"];
//   res.send({ data });
// });

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
