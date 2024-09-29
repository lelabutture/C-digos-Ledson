
const http = require("http");// importar http
const PORT = 8000;//porta do servidor
//criando o servidor
const servidor = http.createServer((req, res) => {
  console.log(req.url, req.method);
});
//utilizando a porta do servidor
servidor.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});