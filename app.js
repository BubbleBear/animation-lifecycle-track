const http = require('http');
const fs = require('fs');

const server = http.createServer();

const PORT = 7777;

server.on('request', (req, res) => {
    const rs = fs.createReadStream('./index.html');

    rs.pipe(res);
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
