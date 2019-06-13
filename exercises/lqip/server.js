const http = require("http");
const hostname = "localhost";
const port = 8081;

const server = http.createServer(async (req, res) => {
  console.log(`serving ${req.url}`);
  if (req.url == "/") {
    res.end(`<html>
    <body>
    <img width=300 src="/blah.jpg" />
    </body>
        </html>`);
  } else {
    const data = new Buffer(
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAA4DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIBAAAgICAgIDAAAAAAAAAAAAAgMBBBEhAAYSQQUHE//EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIjMnH/2gAMAwEAAhEDEQA/ANc738VXelF6wKXDUU6BruX+gGRDE5xmNx4+9YzyU+q1BX6WBA5LlPuWHrJUYHxI51jOtxOvXHHCN2PZxHZ//9k=",
      "base64"
    );
    res.writeHead(200, {
      "Content-Type": "image/jpeg",
      "Content-Length": data.length
    });
    res.end(data);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
