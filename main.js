// const { Telegraf } = require('telegraf')
const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf("5064476598:AAHQFEGgNt1wBjCni9Lgwq0EHyqC_ZCfsqc")
// bot.start((ctx) => ctx.reply(

//     `📋 Lucky Unicorn is a blockchain-based trading and fighting game that is partly owned and operated by players. GameFi allows players to collect, raise, battle and trade unicorns.
// Lucky Unicorn GameFi has launched, and the reward is the L99 coin. L99 is an ecosystem coin with AMM, DEX, Wallet, DAO, Launchpad and Blockchain LN Chain. Join the game at: https://app.luckyunicorn.io/shop

// 🌐 Website: https://luckyunicorn.io/
// 📒 Partnership: Yahoo Finance, AsiaOne, StreetInsider, NEWSMAX, Digital Journal, <a href="google.com"> Pancakeswap</a>, Coinmarketcap, Avalanche

// We are glad that you joined our airdrop
// 💰 Winners: 1800 random winners (250 L99 per winner)
// 💰 Top 20 Referrals: 2500 L99 per referral

// 📢 To get your reward you must complete this tasks.
// 🔹 Follow our Twitter page
// 🔹 Like and Retweet out Twitter’s post and tag 3 members under the post.
// 🔹 Like and follow L99 at Coinmarketcap
// 🔹 Follow our Airdrop Partner's Twitter and retweet this Airdrop tweet
// 🔹 Join our Airdrop Partner's Channel
// 🔹 Subscribe to our Advertiser YouTube channel
// 🔹 Join our Telegram Channel
// 🔹 Join our Telegram <a href="https://t.me/+lTxEfUIiD7w5MTgx">Group</a>

// Note: (You must complete all task then click check button)`, { parse_mode: 'HTML' }))
bot.start(ctx => {
  bot.telegram.sendMessage(ctx.chat.id,
    `📋 Lucky Unicorn is a blockchain-based trading and fighting game that is partly owned and operated by players. GameFi allows players to collect, raise, battle and trade unicorns.
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
    
    Note: (You must complete all task then click check button)`
    , { parse_mode: 'HTML' },
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'one', callback_data: 'one' }
          ]
        ]
      }
    })
})


bot.command('custom', async (ctx) => {
  return await ctx.reply('Custom buttons keyboard', Markup
    .keyboard([
      ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
      ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
      ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
    ])
    .oneTime()
    .resize()
  )
})

bot.command('info', async (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, 'welcome',
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'check', callback_data: 'check' }
          ]
        ]
      }
    })
})

bot.command('check', (callbackQuery) => {
  const message = callbackQuery.message;
  const category = callbackQuery.data;

  bot.telegram.sendMessage(`URL has been labeled with category "${category}"`);
});


bot.on('starts', (ctx) => ctx.reply(`Hello, stephen! I am your friendly Bunny Girl Universe Airdrop bot

✅Please do the required tasks to be eligible to get airdrop tokens.

📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.

Click "Join Airdrop" to proceed`))



bot.on('joinairdrop', (ctx) => ctx.reply(`⭐️ 1 Token: Total 500 Billion $BNGT Pool

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
🔹 Follow our Airdrop Partner's Twitter and retweet this Airdrop tweet`))

bot.on('starts', (ctx) => ctx.reply(`Hello, stephen! I am your friendly Bunny Girl Universe Airdrop bot

✅Please do the required tasks to be eligible to get airdrop tokens.

📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.

Click "Join Airdrop" to proceed`))




bot.on('submitdetails', (ctx) => ctx.reply(`🔹 Join our Telegram Group
🔹 Join our Telegram Channel

After joined, press "✅ Done"`))




bot.on('submitbepadress', (ctx) => ctx.reply(`Submit BEP20 Address (Binance Smart Chain)

You can find this wallet address on Trustwallet (Don't use Binance, FTX Exchange, Mexc, Huobi, GATE, Kucoin or Bybit exchange)`))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on('new_chat_members', (ctx) => console.log(ctx.message.new_chat_members))
bot.launch()