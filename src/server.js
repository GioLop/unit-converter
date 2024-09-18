const http = require('http');
const app = require('./app');

const SERVER_PORT = 8000;

const server = http.createServer(app);

const startServer = () => {
  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on http://localhost:${SERVER_PORT}`);
  });
};

startServer();