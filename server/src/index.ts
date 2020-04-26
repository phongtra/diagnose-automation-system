import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(process.env.NODE_ENV || 3000);
