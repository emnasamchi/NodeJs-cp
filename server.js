// a basic http server with get/post requests handlers on path /

const http = require("http");

const server = http.createServer(function (req, res) {
  const html = "<h1> hello node !!!</h1>\n"
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);

    res.end();
  

});

server.listen(3000, function () {
  console.log("litening on 3000");
});
