const Discord = require('discord.js')

module.exports = {
    name: 'servers',
    description: "Shows servers the bot is in!",
    execute: (client, message, cmd) => {
        if (cmd === 'servers') {
            console.log('!Servers')
            client.guilds.cache.forEach((guild) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${guild.name}`)
                    .setColor(Math.floor(Math.random() * 16777214) + 1,)
                    .addFields(
                        { name: 'Member amount', value: `${guild.memberCount}` })
                message.channel.send(embed)
            })
        }
    }
}
