const Discord = require('discord.js')
const client = new Discord.Client({ disableEveryone: true })
const simple = require('./lib/commandDisplayHandler')
const parser = require('./lib/stringParser')
const fs = require('fs')
const cheerio = require('cheerio')
const chalk = require('chalk')
const _ = require('lodash');

const $ = cheerio.load(fs.readFileSync('./markup/bot.dml'))
const commands = new Set()
var botPrefix = null
var owner = null

fs.readdir('./markup/commands/', (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.dml')) return
        console.log(chalk.blue.bgGreen(`Loaded file: ${chalk.red(file)}`))
        let commandName = file.split(".")[0];
        commands.add(commandName)
    });
})

client.on('message', async message => {
    if (message.channel.type == "dm") return
    if (!message.content.startsWith(botPrefix) || message.author.bot) return

    console.log(message.guild.owner.user.createdAt)

    const args = message.content.slice(Object.keys(botPrefix).length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    if (!commands.has(command)) return
    const $$ = cheerio.load(parser.parse(`./markup/commands/${command}.dml`, message))
    const responseE = $$('response')
    if (responseE.length === 0) return console.log(chalk.bgWhite.red('Command Missing <response> element!'))
    if (args.length === 0 || $$('arg').length === 0) return simple.embed('response', $$, responseE, message)
    else {
        $$('arg').each((i, el) => {
            if (args[0] > $$('arg').length) return
            elem = $$(el)
            if (args[0] === elem.attr('value')) {
                    const argE = elem
                    simple.embed(`arg[value=${i + 1}]`, $$, argE, message)
            }
        })
    }
})

client.on('ready', () => {
    var startupE = $('startup').first()
    console.log(chalk.green('Discord Markup Language Has Launched Successfully!'))
    client.channels.get(startupE.attr('channel')).send((startupE.attr('embed') === 'true') ? new Discord.RichEmbed().setDescription(startupE.text()).setColor(startupE.attr('color')) : startupE.text())
    botPrefix = $('settings > prefix').text()
    owner = $('settings > owner').text().split(',')
    _.each(owner, (value) => {
        console.log(`${chalk.yellow(client.users.get(value).tag)} Is A Bot Owner!`)
    })
})

client.on('error', (err) => {
    console.log(err)
})

client.on('warn', (warn) => {
    console.log(warn)
})



client.login($('settings > token').text())