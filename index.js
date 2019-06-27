'use strict';

require('dotenv');
const Telegraf = require('telegraf');
const { JSDOM }= require('jsdom');
const https = require('https');

const bot = new Telegraf(process.env.BOT_TOKEN, {
	telegram: {
		agent:  null,
		webhookReply: true
	}
});
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

const getNews = (url, ctx, header) => {
	https.get(url, function (response) {
		if (response.statusCode === 200) {
			JSDOM.fromURL(url).then(dom => {
				let data = dom.window.document.querySelectorAll('.other__content > dd > a');
				for (let i in data) {
					if (data[i])
						ctx.reply(`[${header}.\n](${data[i]})`);
					//чтобы не выводилось больше пяти новостей по теме
					if (i > 5) break;
				}
			})
				.catch((err) => console.log(err));
		}
	});
};


bot.command('main', (ctx) => {
	getNews('https://kp.ua/incidents/', ctx, 'Главное')
});
bot.command('politics', (ctx) => {
	getNews('https://kp.ua/politics/', ctx, 'Политика');
});
bot.command('economics', (ctx) => {
	getNews('https://kp.ua/economics/', ctx, 'Економика')
});
bot.command('culture', (ctx) => {
	getNews('https://kp.ua/culture/', ctx, 'Светская жизнь')
});
bot.command('life', (ctx) => {
	getNews('https://kp.ua/life/', ctx, 'Проишествия')
});

bot.command('help', (ctx) => ctx.reply('Чтобы прочитать новости, воспользуйтесь одной с предствленых коман'));
bot.launch();


