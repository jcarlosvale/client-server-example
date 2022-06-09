//incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//definicao de endereco / URL
const hostname = '127.0.0.1';
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {

  //criar um usuario
      //receber informacao do usuario
      const params = queryString.parse(url.parse(req.url, true).search);

      //salvar usuario

  //atualizar um usuario
  //seleconar usuario
  //remover usuario
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World");
});

// Execução do servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});