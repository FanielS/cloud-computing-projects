const http = require("http");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function now() {
  const d = new Date();
  return {
    year: d.getFullYear(),
    month: zeroFill(d.getMonth() + 1),
    date: zeroFill(d.getDate()),
    hour: zeroFill(d.getHours()),
    minute: zeroFill(d.getMinutes()),
  };
}

const server = http.createServer((req, res) => {
  if (req.url === "/api/currenttime") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(now()) + "\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(Number(process.argv[2]));
console.log("Node server running....");
