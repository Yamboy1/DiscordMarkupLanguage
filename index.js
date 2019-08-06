const Discord = require('discord.js')
const client = new Discord.Client({ disableEveryone: true })
const simple = require('./lib/messageEmbed')
const fs = require('fs')
const cheerio = require('cheerio')
const chalk = require('chalk')

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

    const args = message.content.slice(Object.keys(botPrefix).length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    if (!commands.has(command)) return
    const $$ = cheerio.load(fs.readFileSync(`./markup/commands/${command}.dml`))
    const responseE = $$('response')
    if (responseE.length === 0) return console.log(chalk.bgWhite.red('Command Missing <response> element!'))
    if (args.length === 0 || $$('arg').length === 0) {
        simple.embed($$, responseE, message)
    }
    else{
        $$('arg').each((i, elem)=>{
            if(args[0] > $$('arg').length) return
            if(args[0] === $$(elem).attr('value')){
                if($$(`arg[value=${i+1}] > embed`).length === 0) return message.channel.send($$(elem).text())
                else{
                    const argE = $$(elem)
                    simple.embed($$, argE, message)
                }
            }
        })
    }
})

client.on('ready', () => {
    var startupE = $('startup').first()
    console.log('Discord Markup Language Has Launched Successfully!')
    client.channels.get(startupE.attr('channel')).send((startupE.attr('embed') === 'true') ? new Discord.RichEmbed().setDescription(startupE.text()).setColor(startupE.attr('color')) : startupE.text())
    botPrefix = $('settings > prefix').text()
    owner = $('settings > owner').text()
    console.log(owner)
})

client.on('error', (err) => {
    console.log(err)
})

client.on('warn', (warn) => {
    console.log(warn)
})



client.login($('settings > token').text())