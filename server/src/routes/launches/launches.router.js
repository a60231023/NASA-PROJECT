const express = require('express');
const {getAllLaunches, httpAddNewLaunch} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/launches',getAllLaunches);
launchesRouter.post('/launches', httpAddNewLaunch);
module.exports = launchesRouter;      