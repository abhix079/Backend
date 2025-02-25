const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Server is started");
    let rs = fs.createReadStream('largefile.txt');
    rs.pipe(res);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
