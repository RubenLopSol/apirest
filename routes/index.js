// PATH

const express = require("express");
const fs = require("fs"); // viene por defecto con node, no hace falta instalarlo
const router = express.Router(); // funcion de expres para controlar rutas.-

const PATH_ROUTES = __dirname; // ruta absoluta, donde se encuentra el archivo
//console.log("PATH_ROUTES=", PATH_ROUTES);
//const a = fs.readdirSync(PATH_ROUTES);
//console.log("Inside router directory",a);

const removeExtension = (fileName) => {
  //TODO tracks.js -> [tracks,js]
  return fileName.split(".").shift();
};

//devuelve un ARRAY con los contenidos de routes
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // callback para users.js, tracks.js, storage.js
  if (name !== "index") {
    console.log(`cargado ruta ${name}`);
    router.use(`/${name}`, require(`./${file}`)); //TODO  http://localhost:3000/api/tracks
  }
});

module.exports = router;
