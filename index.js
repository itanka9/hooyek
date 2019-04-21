const TelegramBot = require('node-telegram-bot-api');
const token = process.env.HOOYOKEN;
const bot = new TelegramBot(token, {polling: true});

/* bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, 'Хуек');
}); */

const autoReplyDict = {
  'ok': 'Хуек',
  'ок': 'Хуек',
  'оке': 'Хуеке',
  'да': 'Пизда'
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const normalizedText = String(msg.text).toLowerCase()
  const autoReply = autoReplyDict[normalizedText]
  if (autoReply) {
    bot.sendMessage(chatId, autoReply);
  }
});
