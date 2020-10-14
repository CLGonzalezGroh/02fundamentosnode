const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("se escribio");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
  cb("Se borro");
}

// escribir(__dirname + "/archivo1.txt", "Hola mundo cruel");

// leer(__dirname + "/archivo.txt", console.log);

borrar(__dirname + "/archivo1.txt", console.log);
