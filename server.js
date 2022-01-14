const { Telegraf, Markup } = require('telegraf')
const express = require("express");

const bot = new Telegraf("5077804125:AAGtkjghWqof2V_JdXVbY2kJ3SzSaoXOmTI")

const app = express();

const CURRENT_URL = "https://boiling-everglades-72395.herokuapp.com";
let PORT = process.env.PORT || 3000

bot.use(Telegraf.log())

bot.start((ctx) => {
  return ctx.reply(`📋 Lucky Unicorn is a blockchain-based trading and fighting game that is partly owned and operated by players. GameFi allows players to collect, raise, battle and trade unicorns.
  Lucky Unicorn GameFi has launched, and the reward is the L99 coin. L99 is an ecosystem coin with AMM, DEX, Wallet, DAO, Launchpad and Blockchain LN Chain. Join the game at: https://app.luckyunicorn.io/shop
  
  🌐 Website: https://luckyunicorn.io/
  📒 Partnership: Yahoo Finance, AsiaOne, StreetInsider, NEWSMAX, Digital Journal, <a href="google.com"> Pancakeswap</a>, Coinmarketcap, Avalanche
  
  We are glad that you joined our airdrop
  💰 Winners: 1800 random winners (250 L99 per winner)
  💰 Top 20 Referrals: 2500 L99 per referral
  
  📢 To get your reward you must complete this tasks.
  🔹 Follow our Twitter page
  🔹 Like and Retweet out Twitter’s post and tag 3 members under the post.
  🔹 Like and follow L99 at Coinmarketcap
  🔹 Follow our Airdrop Partner's Twitter and retweet this Airdrop tweet
  🔹 Join our Airdrop Partner's Channel
  🔹 Subscribe to our Advertiser YouTube channel
  🔹 Join our Telegram Channel
  🔹 Join our Telegram <a href="https://t.me/+lTxEfUIiD7w5MTgx">Group</a>
  
  Note: (You must complete all task then click check button)`, {
    parse_mode: 'HTML',
    ...Markup.inlineKeyboard([
      Markup.button.callback('Check', 'Check')
    ])
  })
})

// bot.action("check", (ctx) => ctx.reply(`Hello,  I am your friendly Bunny Girl Universe Airdrop bot

// ✅Please do the required tasks to be eligible to get airdrop tokens.

// 📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.

// Click "Join Airdrop" to proceed`, Markup
//   .keyboard([
//     ['🎉🎉Join Airdrop'] // Row1 with 2 buttons
//   ])))


bot.action(/.+/, (ctx) => ctx.reply(`Hello,  I am your friendly Bunny Girl Universe Airdrop bot

  ✅Please do the required tasks to be eligible to get airdrop tokens.
  
  📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.
  
  Click "Join Airdrop" to proceed`, Markup
  .keyboard([
    ['🎉🎉Join Airdrop'] // Row1 with 2 buttons
  ])))

// bot.on('check', (ctx) => ctx.reply(`Hello,  I am your friendly Bunny Girl Universe Airdrop bot

// ✅Please do the required tasks to be eligible to get airdrop tokens.

// 📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.

// Click "Join Airdrop" to proceed`, Markup
//   .keyboard([
//     ['🎉🎉Join Airdrop'] // Row1 with 2 buttons
//   ])))


bot.hears('🎉🎉Join Airdrop', ctx => ctx.reply(`⭐️ 1 Token: Total 500 Billion $BNGT Pool

🔹 Total to earn per Participant: 100,000,000 $BNGT Tokens 
🔹 Per Referrals: 1,000,000 $BNGT Tokens 
🔹 Winners: 5000 random winners get 500 Billion $BNGT tokens 
🔹 Top 50 Referrals: 12,7 Million $BNGT Tokens
1st place                    : 500 Million BNGT
2nd place                  : 200 Million BNGT
3rd place                   : 100 Million BNGT
4st to 50th place  : 10 Million BNGT

🌐 Website: https://bunnygirlnft.com/
📘 IDO: Erax, daostarter
📋 Contract: 0x8ec6df71d4d98c5aff5214e4f680920fedf32a43
📅 Airdrop end date: 15th Jan 2022
🏦 Distribution date: 15 days after listing PancakeSwap

📢 Airdrop Rules

✏️ Mandatory Tasks:
🔹 Join our Telegram Group
🔹 Join our Telegram Channel
🔹 Join our Airdrop Partner's Channel 
🔹 Follow our Twitter page and Retweet the Pinned post
🔹 Follow our Airdrop Partner's Twitter and retweet this Airdrop tweet`, Markup
  .keyboard([
    ['✅Submit Details'], // Row1 with 2 buttons
    ['❌❌Cancel'], // Row2 with 2 buttons
  ])))


bot.hears('✅Submit Details', ctx => ctx.reply(`🔹 Join our Telegram Group
🔹 Join our Telegram Channel

After joined, press "✅ Done!"`, Markup
  .keyboard([
    ['✅ Done'], // Row1 with 2 buttons
    ['❌❌Cancel'], // Row2 with 2 buttons
  ])))

bot.hears('✅ Done!', ctx => ctx.reply(`Submit BEP20 Address (Binance Smart Chain)
You can find this wallet address on Trustwallet (Don't use Binance, FTX Exchange, Mexc, Huobi, GATE, Kucoin or Bybit exchange)`, Markup
  .keyboard([
    ['❌❌Cancel'], // Row2 with 2 buttons
  ])))

//   bot.hears('❌❌Cancel', ctx => ctx.reply(`🔹 Join our Telegram Group
// 🔹 Join our Telegram Channel

// After joined, press "✅ Done"`, Markup
//   .keyboard([
//     ['✅ Done'], // Row1 with 2 buttons
//     ['❌❌Cancel'], // Row2 with 2 buttons
//   ])))























{/*********************************************************copy from here************************************************************************************************************ */ }
bot.command('onetime', (ctx) =>
  ctx.reply('One time keyboard', Markup
    .keyboard(['/simple', '/inline', '/pyramid'])
    .oneTime()
    .resize()
  )
)

bot.command('custom', (ctx) => {
  ctx.reply('Custom buttons keyboard', Markup
    .keyboard([
      ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
      ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
      ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
    ])
  )
})

bot.hears('🔍 Search', ctx => ctx.reply('Yay!'))
bot.hears('📢 Ads', ctx => ctx.reply('Free hugs. Call now!'))

bot.command('special', (ctx) => {
  return ctx.reply(
    'Special buttons keyboard',
    Markup.keyboard([
      Markup.button.contactRequest('Send contact'),
      Markup.button.locationRequest('Send location')
    ]).resize()
  )
})

bot.command('pyramid', (ctx) => {
  return ctx.reply(
    'Keyboard wrap',
    Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  )
})

bot.command('simple', (ctx) => {
  return ctx.replyWithHTML(
    '<b>Coke</b> or <i>Pepsi?</i>',
    Markup.keyboard(['Coke', 'Pepsi'])
  )
})

bot.command('inline', (ctx) => {
  return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', {
    parse_mode: 'HTML',
    ...Markup.inlineKeyboard([
      Markup.button.callback('Coke', 'Coke'),
      Markup.button.callback('Pepsi', 'Pepsi')
    ])
  })
})

bot.command('random', (ctx) => {
  return ctx.reply(
    'random example',
    Markup.inlineKeyboard([
      Markup.button.callback('Coke', 'Coke'),
      Markup.button.callback('Dr Pepper', 'Dr Pepper', Math.random() > 0.5),
      Markup.button.callback('Pepsi', 'Pepsi')
    ])
  )
})

bot.command('caption', (ctx) => {
  return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
    {
      caption: 'Caption',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Plain', 'plain'),
        Markup.button.callback('Italic', 'italic')
      ])
    }
  )
})

bot.hears(/\/wrap (\d+)/, (ctx) => {
  return ctx.reply(
    'Keyboard wrap',
    Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
      columns: parseInt(ctx.match[1])
    })
  )
})

bot.action('Dr Pepper', (ctx, next) => {
  return ctx.reply('👍').then(() => next())
})

bot.action('plain', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.editMessageCaption('Caption', Markup.inlineKeyboard([
    Markup.button.callback('Plain', 'plain'),
    Markup.button.callback('Italic', 'italic')
  ]))
})

bot.action('italic', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.editMessageCaption('_Caption_', {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      Markup.button.callback('Plain', 'plain'),
      Markup.button.callback('* Italic *', 'italic')
    ])
  })
})

bot.action(/.+/, (ctx) => {
  return ctx.answerCbQuery(`Oh!!!!, ${ctx.match[0]}! Great choice`)
})

// bot.launch()
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.use(bot.webhookCallback("/bot"));
bot.telegram.setWebhook(`${CURRENT_URL}/bot`);

app.get("/", (req, res) => {
  res.send("Our new tab!!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listen in the port ${PORT}`);
});