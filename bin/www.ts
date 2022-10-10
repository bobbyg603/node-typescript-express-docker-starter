#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * Module dependencies.
 */

import debug from 'debug';
import fs from 'fs';
import { createServer } from 'http';
import { HttpError } from 'http-errors';
import app from '../app';
import { getConfig } from '../config';
debug('express-generator:server');
const config = getConfig();

/**
 * Create a directory for uploaded files if one does not exist.
 */

if (!fs.existsSync(config.fileUploadPath)) {
    fs.mkdirSync(config.fileUploadPath);
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(config.port);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: number | string) {
    const port = parseInt(val as string, 10);

    if (isNaN(port)) {
    // named pipe
        return val;
    }

    if (port >= 0) {
    // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: HttpError) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr?.port;
    debug('Listening on ' + bind);
}
