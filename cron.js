var CronJob = require('cron').CronJob;
let porta = process.env.PORT || 80;
const { default: axios } = require('axios');
var express = require('express');
const http = require(`http`);
const app = express();
app.get(`/health`, (req, res) => res.status(200).json(`OK`));
const server = http.createServer(app);
server.listen(
    porta,
    () => console.log(`-- Backend Service (${porta}) --`)
);

const job = new CronJob('0 */1 * * * *', async function () {
    try {
        let response = await axios.get(process.env.CLIENT_URL)//configurar o CLIENT_URL=https://something/health
        console.log('Resposta so servidor: OK', JSON.stringify(response.data))
    } catch (error) {
        console.log('ocorreu um erro:', JSON.stringify(error))
    }

});
console.log('Resposta do servidor a cada minuto');
job.start();