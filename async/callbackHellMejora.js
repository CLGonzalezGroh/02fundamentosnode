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

function conversacion(nombre, veces, miCallback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, miCallback);
    });
  } else {
    adios(nombre, miCallback);
  }
}

console.log("Iniciando");

hola("Cesar", function (nombre) {
  conversacion(nombre, 5, function () {
    console.log("terminando");
  });
});
