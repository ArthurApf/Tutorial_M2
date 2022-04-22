const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Curriculo</title></head> \
              <body>\
                <div id="main"> \
                       <h1> Arthur Prado Fraige </h1> \
                       <H2> Eng. de Comp - Aluno do Inteli</H2> </div> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});