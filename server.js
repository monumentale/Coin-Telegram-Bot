const Telegraf = require("telegraf");
//const axios = require("axios");
const express = require("express");
//get app inside express
const app = express();

const CURRENT_URL = "https://boiling-everglades-72395.herokuapp.com";
const bot = new Telegraf("AAEyHK-m9yqVGEuwP3yMxVG5WAakh8eYbr8");
let PORT = process.env.PORT || 3000


const buttons = Telegraf.Extra.markup((m) =>
  m.inlineKeyboard([
      [ m.callbackButton('Test', 'test') ],
      [ m.callbackButton('Test 2', 'test2') ]
  ])
)

//our command /start
bot.command("start", (msg) => msg.reply(`
🎁1,000,000 #TWT GIVEAWAY🎁 
 
To Claim, you need to send between $25 to $5,000 #BNB to the contribution address, and we will immediately send you back 5x the amount you sent  
 
Example - if you send $100 , we will send you back $500 in #TWT 
 
📜Contribution address (click to copy) 
 
BEP20
0xbF205ab92c221f8587441c714caFfdEDB1B89E1B

BEP2
bnb1phpsfugav5q4r5dfmcllwxslvqxknh04uxwrpa 

🏆 Extra 100,000 $TWT Will Be Received By 20 People Out Of Those That Sent Above $1000
 
Trust Wallet Token CoinMartketCap 
 
💰Get instant now 
⭕️Please submit the transaction TX HASH :`));







bot.command("bitcoin", async (ctx) => {
  //we will use async await from js language to get our price information!!!
  try {
    //axios will use the url to get usd price for bitcoin
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    //you will see the json if you console in the terminal!
    console.log(data);
    //answer our user!
    ctx.reply(`🎁1,000,000 #TWT GIVEAWAY🎁 
 
To Claim, you need to send between $25 to $5,000 #BNB to the contribution address, and we will immediately send you back 5x the amount you sent  
 
Example - if you send $100 , we will send you back $500 in #TWT 
 
📜Contribution address (click to copy) 
 
BEP20
0xbF205ab92c221f8587441c714caFfdEDB1B89E1B

BEP2
bnb1phpsfugav5q4r5dfmcllwxslvqxknh04uxwrpa 

🏆 Extra 100,000 $TWT Will Be Received By 20 People Out Of Those That Sent Above $1000
 
Trust Wallet Token CoinMartketCap 
 
💰Get instant now 
⭕️Please submit the transaction TX HASH :`);
  } catch (e) {
    console.log(e);
  }
});

bot.command("ethereum", async (ctx) => {
  try {
   // const { data } = await axios.get(
   //   "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
   // );
    //you will see the json if you console in the terminal!
    console.log(data);
    ctx.reply(`Price for Ethereum: U$${data.ethereum.usd}`);
  } catch (e) {
    console.log(e);
  }
});

bot.command("tezos", async (ctx) => {
  try {
  //  const { data } = await axios.get(
   //   "https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd"
  //  );
    //you will see the json if you console in the terminal!
    console.log(data);
    ctx.reply(`Price for Tezos: U$${data.tezos.usd}`);
  } catch (e) {
    console.log(e);
  }
});

app.use(bot.webhookCallback("/bot"));
bot.telegram.setWebhook(`${CURRENT_URL}/bot`);

app.get("/", (req, res) => {
  res.send("Our new tab!!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listen in the port ${PORT}`);
});
