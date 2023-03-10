const express = require('express');
const planetsRouter = require('./routes/planets/planets.router.js');
const launchesRouter = require('./routes/launches/launches.router')
const cors = require('cors');

const app = express();
app.use(cors({
origin: 'http://localhost:3000'
})); //allows all requestion from all origin so in the object just put that you want to allow
app.use(express.json());
app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app;