const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for all origins
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  next();
});

server.use(router);

// Important: use process.env.PORT for Render
const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`JSON Server running at http://localhost:${port}`);
});
