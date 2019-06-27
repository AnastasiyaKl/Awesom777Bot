'use strict';

require('dotenv');
const Telegraf = require('telegraf');
// const express = require('express');
const https = require('https');
// const request = require('request');
const { JSDOM }= require('jsdom');
// const {JSDOM} = jsdom;

// const token = '892908707:AAFGlwEQ63t8u2MX8zlacqlZKNS661R_N98';

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.telegram.setWebhook(`https://api.telegram.org/bot${token}/setWebhook`);
bot.telegram.setWebhook(`https://awesome-777-bot.herokuapp.com/setWebhook`);

bot.startWebhook('/setWebhook', null, 5000);

bot.start((ctx) => {
	ctx.reply('Добро пожаловать в Awesome777Bot! ' +
		'Здесь вы можете ознакомится с последними новостями' +
		' на одну с представленых тем: политика, экономика, ' +
		'обзество, культура. Чтобы почитать желаемый раздел, ' +
		'просто воспользуйтесь соответсвующей коммандой. ' +
		'При загрузке новостей возможна загрузка в пару секунд перед отображением.');
});

//	возращает список функций
// const getNews = (url, ctx) => {
// 	https.get(url, function (response) {
// 		if (response.statusCode === 200) {
// 			JSDOM.fromURL(url).then(dom => {
// 				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
// 				for (let i in data) {
// 					if (data[i])
// 						ctx.replyWithHTML('<a>' + data[i] + '</a>');
// 					if (i > 4) break;
// 				}
// 			});
// 		}
// 	});
// };


bot.command('main', (ctx) => {
	https.get('https://kp.ua/incidents/', function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL('https://kp.ua/incidents/').then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for (let i = 0; i < 5; i++) {
					if (data[i])
						ctx.replyWithHTML('<a>' + data[i] + '</a>');
				}
			})
				.catch((err) => console.log(err));
		}
	});
});
bot.command('politics', (ctx) => {
	https.get('https://kp.ua/politics/', function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL('https://kp.ua/politics/').then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for (let i = 0; i < 5; i++) {
					if (data[i])
						ctx.replyWithHTML('<a>' + data[i] + '</a>');
				}
			})
				.catch((err) => console.log(err));
		}
	});
});
bot.command('economics', (ctx) => {
	https.get('https://kp.ua/economics/', function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL('https://kp.ua/economics/').then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for (let i = 0; i < 5; i++) {
					if (data[i])
						ctx.replyWithHTML('<a>' + data[i] + '</a>');
				}
			});
		}
	});
});
bot.command('culture', (ctx) => {
	https.get('https://kp.ua/culture/', function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL('https://kp.ua/culture/').then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for(let i = 0; i < 5; i++) {
					if (data[i])
						ctx.replyWithHTML('<a>' + data[i] + '</a>');
				}
			});
		}
	});
});
bot.command('life', (ctx) => {
	https.get('https://kp.ua/life/', function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL('https://kp.ua/life/').then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for (let i = 0; i < 5; i++) {
					if (data[i])
						ctx.replyWithHTML('<a>' + data[i] + '</a>');
				}
			});
		}
	});
});


bot.command('help', (ctx) => ctx.reply('Чтобы прочитать новости, воспользуйтесь одной с предствленых коман'));
bot.launch();


// const app = express();
// app.get('/', (req, res) => res.send('Hi, I`m awesome bot!'));
//
// app.use(bot.webhookCallback('/setWebhook'));
// app.listen(3000, () => {
// //  eslint-disable-next-line
// 	console.log('Example app listening on port 8000!')
// });

