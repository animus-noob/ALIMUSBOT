let didyoumean = require('didyoumean');
let similarity = require('similarity');

let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let cloudres = `Hmmm\nlu nyari *${usedPrefix + mean}* kah?\nKemiripan *${similarityPercentage}%*`;

global.fcloud = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": 'IDR',
						"amount1000": 5000000,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": `${cloudres}`,
							}
						},
						"expiryTimestamp": 999999,
						"amount": {
							"value": 999,
							"offset": 9999,
							"currencyCode": wm
						}
					}
				}
			}
			this.reply(m.chat, `@${m.sender.split('@')[0]}`, fcloud)
      /* this.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: cloudres,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
    }
  }
}

module.exports = handler;