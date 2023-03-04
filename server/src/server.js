const http = require('http');
const { start } = require('repl');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const planetsModel = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function startServer(){
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listenning on port ${PORT}..`);
    });
}
startServer();


