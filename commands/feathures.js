const Discord = require('discord.js')

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Bots feathures and rquirements.',
    callback: ({ }) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Bots feathures`, 'https://i.imgur.com/452TWzr.png')
            .setColor(Math.floor(Math.random() * 16777214) + 1,)
            .addFields(
              //  { name: 'Anti invite link:', value: '`Removes invite links and doesnt require anything.`' },
                { name: 'Per user voice:', value: '`A voice channel that duplicates it self every time somone joins and dletes clone when leves, requires chanel named 🔊`' },
            )
            .setFooter('❤️Made by fininimini#7229❤️')
        return embed
    }
}
