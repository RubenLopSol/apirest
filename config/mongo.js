// CONEXION CON DB

const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.set("strictQuery", true);
  const DB_URL = process.env.DB_URL;
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("*****CONEXION CORRECTA****");
      } else {
        console.log("****ERROR DE CONEXION****");
      }
    }
  );
};

module.exports = dbConnect; // para exportar en este caso a app.js
