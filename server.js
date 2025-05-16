const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for all domains
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 🔓 Allow all origins
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(router);
server.listen(10000, () => {
  console.log('JSON Server is running on port 10000');
});
