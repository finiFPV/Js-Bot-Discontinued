const mongo = require('../util/mongo')
const warnSchema = require('../schemas/warn-schema')

module.exports = {
    name: 'warn',
    execute: async (message, args, cmd) => {
        if (cmd === 'warn') {
            if (message.member.hasPermission('ADMINISTRATOR')) {
                console.log('!warn')
                const target = message.mentions.users.first()
                if (!target) {
                    message.reply('Please specify someone to warn.')
                    return
                }

                args.shift()

                const guildId = message.guild.id
                const userId = target.id
                const reason = args.join(' ')

                const warning = {
                    author: message.member.user.tag,
                    timestamp: new Date().getTime(),
                    reason,
                }

                await mongo().then(async (mongoose) => {
                    try {
                        await warnSchema.findOneAndUpdate(
                            {
                                guildId,
                                userId,
                            },
                            {
                                guildId,
                                userId,
                                $push: {
                                    warnings: warning,
                                },
                            },
                            {
                                upsert: true,
                            }
                        )
                    } finally {
                        mongoose.connection.close()
                    }
                })
            }
            else {
                message.channel.send("Only administrator can do this.")
            }
        }
    }
}