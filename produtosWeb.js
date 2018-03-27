let http =  require('http');

let server = http.createServer((req, res) => {
    res.end(`<html>
                <body>
                    <h1>Listando os produtos</h1>
                </body>
            </html>`);
});
server.listen(3000);

console.log("servidor rodando");
