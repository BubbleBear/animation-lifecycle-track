const http = require('http');
const fs = require('fs');
const { parse: parseUrl } = require('url');

const server = http.createServer();

const PORT = 7777;

const route = {
    '/': '/index.html',
}

server.on('request', (req, res) => {
    const path = parseUrl(req.url).pathname;

    const filepath = route[path] ? route[path] : path;

    const rs = fs.createReadStream(`.${filepath}`);

    rs.on('error', (e) => {
        console.log(e);
        rs.destroy();
        res.end();
    })

    rs.pipe(res);
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
