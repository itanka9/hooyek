const TelegramBot = require('node-telegram-bot-api');
const token = process.env.HOOYOKEN;
const bot = new TelegramBot(token, {polling: true});

const autoReplyDict = {
  'ok': 'Хуек',
  'ок': 'Хуек',
  'оке': 'Хуеке',
  'да': 'Пизда'
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const normalizedWords = String(msg.text).toLowerCase().split(/[-:'"?!,\.\s><]+/).filter(w => !!w)
  const autoReplies = normalizedWords.map(w => autoReplyDict[w]).filter(ar => !!ar)
  const autoReply = autoReplies[Math.trunc(Math.random() * autoReplies.length)]
  if (autoReply) {
    bot.sendMessage(chatId, autoReply);
  }
});
