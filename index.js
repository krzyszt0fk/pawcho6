const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.write(`Adres IP serwera: ${req.socket.localAddress}\n`);
  res.write(`Nazwa serwera: ${os.hostname()}\n`);
  res.write(`Wersja aplikacji: ${process.env.APP_VERSION}\n`);
  res.end();
});

server.listen(80, () => {
  console.log('Listening on port 80');
});