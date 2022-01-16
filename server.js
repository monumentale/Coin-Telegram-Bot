const { Telegraf, Markup, Extra } = require('telegraf')
const express = require("express");
// const Extra = require('telegraf/extra')

const bot = new Telegraf("5035695634:AAE8YTfiZJ9T-AsOhSHTR7EvxPE6Yvea59U")
// 5035695634:AAE8YTfiZJ9T-AsOhSHTR7EvxPE6Yvea59U

const app = express();

const CURRENT_URL = "https://boiling-everglades-72395.herokuapp.com";
let PORT = process.env.PORT || 3000

// bot.use(Telegraf.log())

bot.start((ctx) => {
  return ctx.reply(`Universal Rewards Protocol, DAO powered Ecosystem | The mother of all soon to be built Apps & Services for Web 3.0 that will generate revenue of rewards back to its community. AltSwitch is a first-of-its-kind Binance Smart Chain rewards token that gives you
   absolute control over which rewarded coin you receive and that has anti-bot snipe & anti-whale dump technology to regulate the volatility of market.`, {
    parse_mode: 'HTML',
    ...Markup.inlineKeyboard([
      Markup.button.callback('Join Presale and Participate ', 'Join Presale and Participate ')
    ])
  })
})


bot.action(/.+/, async (ctx) => {
  const users = await bot.telegram.getChatMember(chat_id = "@BunnyGirlNFT", user_id = ctx.chat.id)
  console.log(users.status)


  ctx.reply(`Altswitch ALTS
  Total Supply- 1,000,000,000 ALTS
  Total For Presale-200,000,000
  Presale Rate-1 BNB=200,000 ALTS 
  Listing Rate-1BNB=139,950 ALTS
  Initial Market Cap-$1,066,310
  Soft Cap-500BNB
  Hard Cap-1000BNB
  Unsold Tokens-Burn 
  
  Presale start date-2022-01-17 
  16:00 (UTC)
  
  Presale End date-2022-01-18
  16:00(UTC)
  
  Listing on Pancakeswap
  
  Buy Limit- 0.1-5 (BNB)`, Markup
    .keyboard([
      ['🎉🎉Join Presale'] // Row1 with 2 buttons
    ])
    .oneTime()
    .resize()
  )

})




bot.hears('🎉🎉Join Presale', ctx => {
  ctx.reply(`✏️ Mandatory Tasks:

 <a href="https://t.me/+cPMxNMLBWuI3ZDJh"> 🔹 Join our Telegram Channel</a>
<a href="https://twitter.com/altswitchglobal/status/1482033602699448336?s=21"> 🔹 Follow our Twitter page and Retweet the Pinned post</a>
<a href="https://twitter.com/cryptonftvers"> 🔹 Follow our Presale Partner's Twitter and retweet this Presale tweet</a>
<a href="https://t.me/+68Z7iFJz2lpiMzlh"> 🔹 Join our Telegram Group</a>
Submit your retweeted link of our partners Presale Tweet.`,

    {
      parse_mode: 'HTML',
      ...Markup
        .keyboard([
          ['✅Submit Details'], // Row1 with 2 buttons
          ['❌❌Cancel'], // Row2 with 2 buttons
        ])
        .oneTime()
        .resize()
    }


  )
})



bot.hears('✅Submit Details', async ctx => {
  const users = await bot.telegram.getChatMember(chat_id = "@AltswitchOfficialPresale", user_id = ctx.chat.id)
  console.log(users.status)

  if (users.status == "member") {

    ctx.reply(`✏️ Mandatory Tasks:
  
    <a href="https://t.me/+cPMxNMLBWuI3ZDJh">🔹 Joined our Telegram Group</a>
   <a href="https://t.me/+68Z7iFJz2lpiMzlh">🔹 Joined our Telegram Channel</a>
   Submit your retweeted link of our partners Presale Tweet.`,

      {
        parse_mode: 'HTML',
        ...Markup
          .keyboard([
            ['✅ Done!'], // Row1 with 2 buttons
            ['❌❌Cancel'], // Row2 with 2 buttons
          ])
          .oneTime()
          .resize()
      }

    )

    //     ctx.reply(`🔹 Joined our Telegram Group
    // 🔹 Joined our Telegram Channel

    // After joined, press "✅ Done!"`, Markup
    //       .keyboard([
    //         ['✅ Done!'], // Row1 with 2 buttons
    //         ['❌❌Cancel'], // Row2 with 2 buttons
    //       ])
    //       .oneTime()
    //       .resize()
    //     )

  } else {
    ctx.reply(`✏️ Mandatory Tasks:
  
    <a href="https://t.me/+cPMxNMLBWuI3ZDJh"> 🔹 Join our Telegram Channel</a>
   <a href="https://twitter.com/altswitchglobal/status/1482033602699448336?s=21"> 🔹 Follow our Twitter page and Retweet the Pinned post</a>
   <a href="https://twitter.com/cryptonftvers"> 🔹 Follow our Presale Partner's Twitter and retweet this Presale tweet</a>
   <a href="https://t.me/+68Z7iFJz2lpiMzlh"> 🔹 Join our Telegram Group</a>
   Submit your retweeted link of our partners Presale Tweet.`,

      {
        parse_mode: 'HTML',
        ...Markup
          .keyboard([
            ['✅Submit Details'], // Row1 with 2 buttons
            ['❌❌Cancel'], // Row2 with 2 buttons
          ])
          .oneTime()
          .resize()
      }


    )
  }
})



bot.hears('✅ Done!', async ctx => {
  var chat_id = ctx.chat.id
  await bot.telegram.sendPhoto(
    chat_id,
    { url: "https://firebasestorage.googleapis.com/v0/b/capitalbrokerinc.appspot.com/o/WhatsApp%20Image%202022-01-15%20at%2022.03.29.jpeg?alt=media&token=247921b1-f6a3-4a12-a48e-beee1f8782d2" }
  )
  ctx.reply(`Submit Wallet Address`, Markup
    .keyboard([
      ['✅ Wallet Submitted'],
      ['❌❌Cancel'], // Row2 with 2 buttons
    ])
    .oneTime()
    .resize()
  )
})


bot.hears('✅ Wallet Submitted', async ctx => {
  var chat_id = ctx.chat.id
  //   await bot.telegram.sendPhoto(
  //     chat_id ,
  //     {url: "https://firebasestorage.googleapis.com/v0/b/capitalbrokerinc.appspot.com/o/WhatsApp%20Image%202022-01-15%20at%2022.03.29.jpeg?alt=media&token=247921b1-f6a3-4a12-a48e-beee1f8782d2"}
  // )
  ctx.reply(`Presale start date-2022-01-17 
  16:00 (UTC)
  
  Presale End date-2022-01-18
  16:00(UTC)
  
  Listing on Pancakeswap
  
  Buy Limit- 0.1-5 (BNB)
  
  Presale address
  0x43f73d4ED9e5c848Fe55B108213a72eB7f02D50d (send only BNB )
  
  Distribution begins immediately after Presale and Presale cap limits have been reached on 2022-01-08(Launch Date)`, Markup
    .keyboard([
      // ['✅ Wallet Submitted'],
      ['❌❌Cancel'], // Row2 with 2 buttons
    ])
    .oneTime()
    .resize()
  )
})










{/*********************************************************copy from here************************************************************************************************************ */ }


//   bot.hears('❌❌Cancel', ctx => ctx.reply(`🔹 Join our Telegram Group
// 🔹 Join our Telegram Channel

// After joined, press "✅ Done"`, Markup
//   .keyboard([
//     ['✅ Done'], // Row1 with 2 buttons
//     ['❌❌Cancel'], // Row2 with 2 buttons
//   ])))
// bot.on('check', (ctx) => ctx.reply(`Hello,  I am your friendly Bunny Girl Universe Airdrop bot

// ✅Please do the required tasks to be eligible to get airdrop tokens.

// 📘By Participating you are agreeing to the Bunny Girl Universe (Airdrop) Program Terms and Conditions. Please see pinned post for more information.

// Click "Join Airdrop" to proceed`, Markup
//   .keyboard([
//     ['🎉🎉Join Airdrop'] // Row1 with 2 buttons
//   ])))
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