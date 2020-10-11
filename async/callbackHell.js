function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(miCallback) {
  setTimeout(function () {
    console.log("Bla bla bla...");
    miCallback();
  }, 1000);
}

function adios(nombre, miCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    miCallback();
  }, 1000);
}

console.log("Iniciando");

hola("Cesar", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        hablar(function () {
          adios(nombre, function () {
            console.log("terminando");
          });
        });
      });
    });
  });
});
