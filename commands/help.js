const Discord = require('discord.js')

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Help!!',
    callback: ({ }) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Lil_Fin`, 'https://i.imgur.com/452TWzr.png')
            .setTitle('Commands list')
            .setColor(Math.floor(Math.random() * 16777214) + 1,)
            .setDescription('Prefix: `!`')
            .addFields(
                { name: '💁info', value: '`botinf, ping, serverinfo, servers, userinfo, wl`' },
                { name: '🕴️ Admin', value: '`cc, warn`' },
                { name: '😄fun', value: '`meme`' },
                { name: '💁Command explanations', value: '`info`' },
                { name: '👑Owner', value: '`status`' },
            )
            .setFooter('❤️Made by fininimini#7229❤️')
        return embed
    }
}