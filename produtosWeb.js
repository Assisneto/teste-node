let http =  require('http');
let porta = 3000;
let ip = "localhost";

let server = http.createServer((req, res) => {
    console.log("Recebendo request");
    res.writeHead(    200, {'Content-Type': 'text/html'});
    res.end(`<html>
                <body>
                    Request recebido!!!
                </body>
            </html>`);
});
server.listen(porta, ip);
console.log("Server running at http://" + ip + ":" + porta + "/");


