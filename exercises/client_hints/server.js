const http = require("http");
const fs = require("fs");
const sharp = require("sharp");

const hostname = "127.0.0.1";
const port = 8080;
const root = "www";

const printHeaders = req => {
  console.log(JSON.stringify(req.headers));
};

const printCHHeaders = req => {
  console.log(`Width: ${req.headers.width}`);
  console.log(`Viewport-Width: ${req.headers["viewport-width"]}`);
  console.log(`DPR: ${req.headers.dpr}`);
};

const serveFile = async (path, req, res) => {
  try {
    const file = fs.readFileSync(`${root}${path}`);
    res.statusCode = 200;
    if (path.endsWith(".html")) {
      res.setHeader("Content-Type", "text/html");
      res.end(file);
    } else if (path.endsWith(".jpg")) {
      res.setHeader("Content-Type", "image/jpg");
      res.setHeader("Content-DPR", req.headers.dpr);
      const resizedImage = await sharp(file)
        .resize(parseInt(req.headers.width, 10))
        .toBuffer();
      res.end(resizedImage);
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.end(file);
    }
  } catch (err) {
    console.log(err);
    res.statusCode = 404;
    res.end("not found");
  }
  res.end();
};

const server = http.createServer(async (req, res) => {
  console.log(`serving ${req.url}`);
  printCHHeaders(req);
  await serveFile(req.url, req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
