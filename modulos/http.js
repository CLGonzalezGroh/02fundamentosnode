const http = require("http");

http
  .createServer((req, res) => {
    console.log("Nueva Peticion");
    console.log(req.url);

    res.write("Esta es la respuesta");
    res.end();
  })
  .listen(3000);
