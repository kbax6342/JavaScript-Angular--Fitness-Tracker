
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const serveCSS = function (req, res) {
    if (req.url.indexOf('/Users/Baxter/Web-Dev-Workspace/Fitness-Tracker/style.css') !== -1) {
        const css = fs.createReadStream(__dirname + req.url, 'utf8');
        css.pipe(res);
    }
};

fs.readFile('/Users/Baxter/Web-Dev-Workspace/Fitness-Tracker/index.html', (err, html) => {

    if (err) {

        throw err;

        }


        const server = http.createServer((req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();

    });

        server.listen(port, hostname, () => {

        console.log(`Server start on port${port}`);

    });

});
