// Import the built-in HTTP module
const http = require('http');
// Create a server
const server = http.createServer((req, res) => {
    // Set response status and content type
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Send response to the browser
    res.end('Welcome to Node.js Server');
});
// Configure port number
const PORT = 3000;
// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
