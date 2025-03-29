// websocket-server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 }); // Choose a port different from your Next.js app

wss.on('connection', ws => {
  const clientId = Date.now();
  console.log(`[WebSocket Server] Client connected: ${clientId}`);

  ws.on('message', message => {
    console.log(`[WebSocket Server] Received message from ${clientId}: ${message}`);
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`[WebSocket Server] Server received from ${clientId}: ${message}`);
      }
    });
  });

  ws.on('close', () => {
    console.log(`[WebSocket Server] Client disconnected: ${clientId}`);
  });

  ws.on('error', error => {
    console.error(`[WebSocket Server] WebSocket error for client ${clientId}:`, error);
  });

  ws.send('[WebSocket Server] Welcome!');
});

console.log('[WebSocket Server] WebSocket server started on port 8081');