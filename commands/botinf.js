const Discord = require('discord.js')
const { version } = require('../package.json')
module.exports = {
    name: 'botinf',
    description: "Info about bot!",
    execute: (client, message, cmd) => {
        if (cmd === 'botinf') {
            console.log('!Botinfo')
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Bot Info`, 'https://i.imgur.com/452TWzr.png')
                .setFooter('❤️Made by fininimini#7229❤️')
                .setColor(Math.floor(Math.random() * 16777214) + 1,)
                .addFields(
                    {
                        name: '#️⃣Bot tag#️⃣',
                        value: 'finaker#5022',
                    },
                    {
                        name: '💠Version💠',
                        value: version,
                    },
                    {
                        name: '❗Prefix❗',
                        value: '`!`',
                    },
                    {
                        name: '🕒Up time🕒',
                        value: `${process.uptime().toFixed(0)}s`,
                        inline: true
                    })
                .addField('Invite bot', 'https://bit.ly/3uuhU17')
            message.channel.send(embed)
        }
    }
}