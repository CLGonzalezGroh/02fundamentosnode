function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
      reject("Error de Hola");
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...");
      resolve(nombre);
      reject("Error de hablar");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve(nombre);
      reject("Error de Adios");
    }, 1000);
  });
}

console.log("Iniciando proceso...");
hola("Cesar")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => console.log("Terminando proceso..."))
  .catch((err) => console.error(err));
