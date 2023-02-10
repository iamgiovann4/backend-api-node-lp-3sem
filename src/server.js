const http = require('node:http'); //Vem dentro do pacote do node
const fs = require('fs') //Vem dentro do pacote do node

const hostname = 'localhost';
const port = 3200; //porta

const server = http.createServer((req, res) => { //chamando a constante de cima. Criando um servidor tipo o appache. Os parâmetros são: 1ºRequest 2ºResponse
  console.log('URL: ' + req.url)
  if(req.url === '/'){
    res.statusCode = 200; //Resposta quando fizer o request no Network
    res.setHeader('Content-Type', 'text/html'); //Resposta quando fizer o request no Network
    fs.readFile('src/views/index.html', (error, codigo) => { //Resposta quando fizer o request, mas aparecerá no body
      res.end(codigo);
    })
  } else if(req.url === '/curso'){ //onde está curso pode ser qualquer coisa escrita
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('src/views/curso.html', (error, codigo) => {
      res.end(codigo);
    })
  }
});
server.listen(port, hostname, () => { //como se eu estivesse ligando o appache
  console.log(`Server running at http://${hostname}:${port}/`); //Avisando que está rodandoe deu certo.
});