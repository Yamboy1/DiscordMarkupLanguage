const fs = require('fs')
const _ = require('lodash')

exports.parse = (fileURL, message) => {
    let str = fs.readFileSync(fileURL).toString()
    const modifiers = {
        author: {
            'id': message.author.id,
            'tag': message.author.tag,
            'avatar': message.author.avatarURL,
            'username': message.author.username,
            'isBot': message.author.bot,
            'createdOn': message.author.createdAt,
            'presence:status': (message.author.presence != null) ? message.author.presence.status: null,
            'presence:name': (message.author.presence.game != null) ? message.author.presence.game.name: null,
            'presence:details': (message.author.presence.game != null) ? message.author.presence.game.details: null,
            'presence:state': (message.author.presence.game != null) ? message.author.presence.game.state: null,
            'presence:time:start': (message.author.presence.game != null) ? message.author.presence.game.timestamps.start: null,
            'presence:time:end': (message.author.presence.game != null) ? message.author.presence.game.timestamps.end: null
        },
        message: {
            'content': message.author.lastMessage.content,

        },
        guild: {
            'name': message.guild.name,
            'owner': message.guild.owner.user.tag,
            'owner:nickname': message.guild.owner.nickname,
            'owner:id': message.guild.owner.id,
            'owner:createdOn': message.guild.owner.user.createdAt
        }
    }
    _.each(modifiers, (value, key) => {
        _.each(modifiers[key], (value, subkey) => {
            str = str.replace(new RegExp(`{{${key + ':' + subkey}}}`, 'g'), value)
        })
    })
    return str
}