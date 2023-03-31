var CronJob = require('cron').CronJob;
var express = require('express');
const http = require(`http`);
const app = express();

const job = new CronJob('0 */1 * * * *', function () {
    app.get(`/health`, (req, res) => res.status(200).json(`OK`));
    const server = http.createServer(app);
    server.listen(
        1337,
        () => console.log(`-- Backend Service (1337) --`)
    );
});
console.log('Resposta do servidor a cada minuto');
job.start();