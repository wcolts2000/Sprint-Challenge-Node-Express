const express = require("express");
const configureMiddleware = require("../config/middleware.js");

const projectsRouter = require("../projects/projectsRouter");
const actionsRouter = require("../actions/actionsRouter");

// Server Init
const server = express();

// Middleware
configureMiddleware(server);

// Routes

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
