const { version } = require('../package.json')
const Discord = require('discord.js')

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Info about bot.',
    callback: ({ }) => {
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
        return embed
    }
}
