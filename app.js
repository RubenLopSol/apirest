// EXPRESS SERVER

require("dotenv").config(); // para usar las variables de entorno
const express = require("express"); // Servicio web
const cors = require("cors"); //Libreria para evitar error cruzado entre navegadores
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000; // puerto desde vari.entorn.env o si no existe el 3000

app.listen(port, () => {
  //funcion inicial ejecucion por puerto
  console.log(`Tu app esta lista por http://localhost:${port}`);
});
dbConnect();// LLAMANDO A CONECTION CON DB (IMPORT, LA EXPORTACION)
