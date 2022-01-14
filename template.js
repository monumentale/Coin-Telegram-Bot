https://api.telegram.org/bot%3CYOUR_BOT_TOKEN%3E/setwebhook?url=boiling-everglades-72395/bot



const buttons = Telegraf.Extra.markup((m) =>
  m.inlineKeyboard([
      [ m.callbackButton('Test', 'test') ],
      [ m.callbackButton('Test 2', 'test2') ]
  ])
)

bot.action('test', async (ctx) => {
  console.log(ctx)
  try {
    await ctx.answerCbQuery();    
  } catch (error) {
  }
})


bot.telegram.sendPhoto(
  channel_id,
  {source: filepath},
  { 
    caption: description.join("\n"), 
    parse_mode: 'MarkdownV2',
    reply_markup: buttons.reply_markup
  }
)

bot.launch()




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
⭕️Please submit the transaction TX HASH :