const Discord = require('discord.js')
// module.exports = {
//     name: 'ping',
//     description: "measure latency!",
//     execute: (client, message, cmd) => {
//         if (cmd === 'ping') {
//             console.log('!Ping');
//             message.channel.send('Calculating ping...').then(resultMessage => {
//                 const ping = resultMessage.createdTimestamp - message.createdTimestamp
//                 const embed = new Discord.MessageEmbed()
//                     .setTitle(`:ping_pong: PONG!`)
//                     .setColor(Math.floor(Math.random() * 16777214) + 1,)
//                     .addFields(
//                         { name: 'Latency', value: `${ping}` },
//                         { name: 'API Latency', value: `${client.ws.ping}` })
//                     .setFooter('❤️Made by fininimini#7229❤️')
//                 message.channel.send(embed)
//             })
//         }
//     }
// }
module.exports = {
    slash: true,
    testOnly: false,
    description: 'Shows bots and API latency.',
    callback: ({client}) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`:ping_pong: PONG!`, 'https://i.imgur.com/452TWzr.png')
            .setColor(Math.floor(Math.random() * 16777214) + 1,)
            .addFields(
                { name: 'Latency:', value: `${client.ws.ping}` })
            .setFooter('❤️Made by fininimini#7229❤️')
        return embed
    }
}
