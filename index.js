'use strict';

const http = require('http');
const token = process.env['tg_api_key'] || '892908707:AAGn1vOiAmYZH1Ddq315qoO8i_5bw30dPAk';

let port = process.env.PORT;
if (port == null || port === '') {
    port = 8000
}

http.createServer((req, res) => {
        res.end('Welcome to Awesome777Bot!')
    })
    .listen(port);
const setWebHook = () => {
    const setWebhookUrl = `https://api.telegram.org/bot${token}/setWebhook`;

    request.post({
            url: setWebhookUrl,
            method: 'post',
            body: {
                url: webHookUrl
            },
            json: true
        },
        (error, response, body) => {
            console.log(body);
            console.log(error);
        })
};

setWebHook();

bot.on('message', (msg) => {
    console.log(msg);

    request.on('error', function (error) {
        console.error(error.status)
    })
});

bot.onText('hi', function (msg, match) {
    console.log('Welcome to Awesome777Bot');
});

bot.on('polling_error', (error) => {});