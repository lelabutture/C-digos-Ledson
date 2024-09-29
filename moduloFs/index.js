// require(fs) //require(http)
// criar um servidor web para interpretar o html

const fs = require("node:fs");
const http = require("node:http");

//console.log(fs, http)
const PORT = 3000;
const servidor = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./docs/index.html", "utf-8", function (err, arquivo) {
      if (err) {
        console.error("errouuuuu...:" + err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(arquivo);
        res.end();
      }
    });
  }
});
servidor.listen(PORT, function () {
  console.log("Servidor rodando na porta " + PORT);
});
