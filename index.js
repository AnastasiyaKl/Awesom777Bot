'use strict';

const http = require('http');
// const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const firebase = require('firebase');

const token = process.env['tg_api_key'] || '892908707:AAGn1vOiAmYZH1Ddq315qoO8i_5bw30dPAk';
const webHookUrl = 'https://awesome-777-bot.herokuapp.com';

let port = process.env.PORT;
if (port == null || port === '') {
    port = 8000
}

const firebaseConfig = {
    apiKey: "AIzaSyBwobfTTiY794xNFCVavrzbOnkJMyFYq7A",
    authDomain: "weatherbot-b16fb.firebaseapp.com",
    databaseURL: "https://weatherbot-b16fb.firebaseio.com",
    projectId: "weatherbot-b16fb",
    storageBucket: "weatherbot-b16fb.appspot.com",
    messagingSenderId: "419208145579",
    appId: "1:419208145579:web:b38df2277851fe91"
};

require('http').createServer((req, res) => {
        res.end('Welcome to Awesome777Bot!')
    })
    .listen(port);

// const bot = new TelegramBot(token, { polling: true });

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

const Telegraf = require('telegraf');
const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.command('main', (ctx) => ctx.reply('Hello'))

setWebHook();

// bot.startPolling();
//
// bot.on('message', (msg) => {
//     console.log(msg.text);
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId,'Welcome to Awesome777Bot');
//
//     // request.on('error', function (error) {
//     //     console.error(error.status)
//     // })
// });

// bot.onText('hi', function (msg, match) {
//     console.log('Welcome to Awesome777Bot');
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Welcome to Awesome777Bot');
// });
//
// bot.onText(/\/main/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'You chose main');
// })
//
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });
//
// bot.on('polling_error', (error) => {
//     console.log(error)
// });

