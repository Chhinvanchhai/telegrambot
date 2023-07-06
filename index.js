const TelegramBot = require("node-telegram-bot-api");
// replace the value below with the Telegram token you receive from @BotFather
const token = "6338969914:AAEZdit8GNvhmocCOQMwbz12fWB1OR80vNE";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  console.log(resp, chatId);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLocaleLowerCase();
  console.log(text);
  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(chatId, "Hello dear user");
  }
  else if (text == "phen") {
    bot.sendMessage(
      chatId,
      "👧 He is single men, you find to contact him is available anytime 👨‍👨‍👧‍👧"
    );
    bot.sendPhoto(msg.chat.id, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcH2vtf8pamW6wIEupMVvNT6xzaLSQEpI0w&usqp=CAU"); 
  }
  else if (text == "rotha") {
    bot.sendMessage(
      chatId,
      "👧 He is handsome boy.  👨‍👨‍👧‍👧"
    );
  }
  else if (msg.text.toString().toLowerCase().indexOf('bot') === 0) {
    bot.sendMessage(chatId, "Just call me bot");
  } else {
    bot.sendMessage(chatId, "👩‍💻 Do not have any existing key in bot dictionary yet 🏗️");
  }
});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
  "reply_markup": {
      "keyboard": [["Rotha", "Second sample"],   ["Keyboard"], ["I'm robot"]]
      }
  });
  
  });

bot.onText(/\/sendpic/, (msg) => {

  bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg",{caption : "Here we go ! \nThis is just a caption "} );
  
  });
