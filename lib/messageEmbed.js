const Discord = require('discord.js')

exports.embed = ($$, elem, message) => {
    let embed = new Discord.RichEmbed()
    if (!$$('response > embed').length) return message.channel.send(elem.text())
    if (elem.find('title').length !== 0) embed.setTitle(elem.find('title').first().text())
    if (elem.find('author').length !== 0) embed.setAuthor(elem.find('author').first().text())
    if (elem.find('description').length !== 0) embed.setDescription(elem.find('description').first().text())
    if (elem.find('thumbnail').length !== 0) embed.setThumbnail(elem.find('thumbnail').first().text())
    if (elem.find('field').length !== 0) elem.find('field').each((i, elem) => {
        embed.addField($$(elem).attr('title'), $$(elem).text())
    })
    if (elem.find('color').length !== 0) embed.setColor(elem.find('color').first().text())
    if (elem.find('footer').length !== 0) embed.setFooter(elem.find('footer').first().text(), elem.find('footer').attr('image'))
    if (elem.find('footer').attr('timestamp') === 'true') embed.setTimestamp()
    message.channel.send(embed)
}