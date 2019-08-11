# Discord Markup Language
<h4>By: RevokedOwl Studios<h4>
Discord Markup Language is a simple, yet powerful markup language to help interact with the DiscordApp API with ease, and to help beginning developers create dynamic and extensive first-time bots for their servers!
<h1>Installation</h1>
Required: <a href="https://nodejs.org/dist/v10.16.2/node-v10.16.2-x64.msi">Node.Js LTS</a>

<a href="https://github.com/revokedowl-studios/DiscordMarkupLanguage/archive/master.zip">Download this repootory as a .zip</a> > extract the files > open your terminal of choice > use `cd` to get to the path with DML > run `node index.js`. This will auto generate the required `bot.dml` file, and an example `ping.dml` command.
<h1>Example Ussage</h1>
<h6>The bot.dml file, a required setup file for all users to configure to bots code with its 
owners and token, as well as all of the bots events.</h6>

* Tokens
> Whats a token? A token is how the bot can login and connect to discord. the one below is invalid so you will have to generate your own at the [Discord Developers Page](https://discordapp.com/developers/applications/)
* Start up Channel
> Whats the start up channel? The start up channel is the channel the bot sends a message to every time you start it up. How do I find the id of a channel? Goto your discord `setting > appearance` and enable `developer mode` then you can right click your desired channel and copy the id.
* Owner
> Whats the owner tag? This is your ID! do the last step by enabling developer mode and then right click your name and copy id.
* Prefix
> Whats the Prefix? The what the bot looks for in every message sent and if it contains your desired prefix + a valid command it will execute that command.
```html
<settings>
    <prefix>/</prefix>>
    <owner>583295728349462947</owner>
    <token>dehsNbNbhj638e9.hfenf.fnjENJFB_frbref.vfhehd_NBU_pfnJGJn</token>
</settings>
<startup> channel='462i4552035622942'embed='true color='#FFFC33'>The bot has successfully booted with ping: {{bot:ping}}ms</startup>
```

# Documentation
This is the documentation for the Discord Markup Language. Listed below are examples of all DML's tags. A tag always uses the same syntax: <tag>TEXT</tag>. The begining tag, is the tags name, and the closing tag is the tag's name with a / in front. Tags can also include attributes. An attribute is something defined using a = inside a tag. For example, <tag field='text'>TEXT</tag>. Attributes will always be a string, and will always be in the beginning tag, and never include a space between the attribute, =, and string. DML also offers External API calls, called DML external calls. These are used to call information from the Discord API. External calls are always formatted like this: {{Module:Specific}}, where the Module is what its calling from (A member, author, bot, guild, or message), and the Specific is what its calling from that module. Calls can be used in any text field. 

Basic information:

* Data Types
<h6>You can read more about data types <a href="https://javascript.info/types">Here</a></h6>

> `String` "Text inside quotes"

```js
let str = "This is a string";
// Outputs: This is a string
str = "This just changed the value of the string.";
// Outputs: This just changed the value of the string.
```

> `Boolean` 'true' or 'false'

```js
// 0 is also equal to false.
// 1 is also equal to true.
let str = "String";
/**
 * @var str is equal to true since it something assigned to it
 * @var str would be equal to false if str had nothing assigned to it such as, let str;
*/
if (str) {
    console.log(str)
} else {
    console.log('No string found')
}
```

> `Integer` A simplified number

> `Float` a number with a decimal

> `Comment` Text ignored by code, HTML: <!--COMMENT-->, JS: // Comment & /* Comment */
  
<blockquote>Required Files: bot.dml</blockquote>

* Settings (Required - File: bot.dml)
```html
<settings> <!--This tag is where you will store the bot's config information-->
    <prefix>The bots prefix (Only one character)</prefix> 
    <owner>The bot owner's User ID</owner>
    <token>The bots Token, or client secret</token>
</settings>
```
* Events (File: Bot.dml)
```html
<startup channel='ChannelId'<!--The channel where you want the startup message to send--> embed='boolean'<!--If the message is an embed--> color='#HedId' <!--If embed='true', this is the color of  the embedded message-->>What the message will actually say</startup>
```
* Embed Syntax (File: Command File)
```html
<required member="User ID"> <!--This tag is an odd exeption. Becouse it only uses an attribute, it has no closing tag-->
<response>  <!--This tag is how most command files should start. It is used to respond to a command-->
    <console>The console tag is used to print something to console</console>
    <embed> <!--This tag is used to make an embedded message-->
        <author>The author field of an embed message</author>
        <description>The description field of an embed message</description>
        <feild title='the title of an embed field'>The value of an embed field</fields>
        <color>#hexID</color> <!--This tag is used to set the color of an embed message-->
        <thumbnail>ImageUrl</thumbnail> <!--This tag is used to set the tumbnail of an embed messsage-->
        <footer timestamp='boolean'<!--If you want your embed's footer to inclue a timestamp--> image='ImageUrl'<!--The footer icon on your embed-->>The footer field of an embed</footer>
    </embed>
</response>
```
* Arguments (FIle: Command File)
```html
<arg value="Text>
            
    <response>The 'value' of the argument is what you would use to call it. So if the command was ping, and the argumnt value was 1, to call the argument would be `/ping 1`,\nIn an argument, you can use any tags and calls just as you would in the normal command, In this field, you can use things like: <response>, <embed>, <console>, etc.</response>
            
</arg>            
            
```


* DML External Calls - These are used to call information from the Discord API. They can be used in any text field.

(File: Any)

* Bot Calls
```
{{bot:ping}} Displays the bots current ping speed in milliseconds
{{bot:avatar}} The bot's avatar
{{bot.createdOn}} Displays a timestamp when the bot was created
{{bot.id}} Displays the bot's user ID
{{bot:presence:status}} Displays the bots current Discord presence
```
* Member Calls
```
{{memer:tag}} The Name#0000 tag of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:username}} The Name wihtout the #0000 of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:avatar}} The avatar of the member that was defined in the <require> tag. Requires: A <require> tag
```
* Author Calls
```
{{author:username}} Displays the command authors Name without the #0000
{{author:tag}} Displays the command authors Name#0000 tag
{{author.id}} Displays the user ID of whoever requested a command.
{{author:avatar}} The avatar of the command
{{author:createdOn}} Displays when the command authors discord account was made
{{author:isBot}} Dislays if the command author is a bot
{{author:presence:name}} Displays the comand authors current Discord presence name
{{author:presence:details}} Displays the comand authors current Discord presence details
{{author:presence:state}} Displays the comand authors current Discord presence details
{{author:presence:time:start}} Displays the comand authors current Discord presence start time
```
* Guild Calls
```
{{guild:name}} The name of the guild the command/event was run
{{guild:owner}} The owner of the guild the command/event was run
{{guild:owner:nickname}} The nickname of the guild's owner the command/event was run
{{guild:owner:id}} Thd id of the guild's owner the command/event was run
{{guild:owner:createdOn}} When the owner of the guild the command/event was run on account was created
```
* Message Calls
```
{{message:content}} Displays the message content that triggered the command/event (For commands, the command name)
```
          
          
<h5>This is the end of our documentation. If you find an error, please submit a pull request! If you need further support, please <a href="https://discord.gg/DPqH5dW">Join our Discord server</a> or <a href="mailto:dml@revokedowl.xyz">Email about this project</a>.

<h2>Discord Markup Language</h4>
<h3>By: RevokedOwl Studios</h2>
<h4><a href="http://revokedowl.xyz">Website</a></h2>
<h4><a href="mailto:help@revokedowl.xyz">Contact</a></h2>
<h4><a href="https://github.com/revokedowl-studios">GitHub</a></h2>
<h4><a href="https://discord.gg/DPqH5dW">Discord</a></h2>
<h4>Our team:</h4>
<h6>Retr0n - Ownership & Lead Development: JavaScript, TypeScript, Python, CSS, HTML, C#; <a href="mailto:clamera@revokedowl.xyz">Contact</a></h6>
    
<h6>Hunter P. (RevokedCookie) - Ownership & Lead Development: Python, JavaScript, HTML; <a href="mailto:HPaulsoN@RevokedOwl.xyz">Contact</a></h6>
    
<h6>JavaBoi - Lead Development: JavaScript, Python, C#; <a href="mailto:anoble@revokedowl.xyz">Contact</a></h6>
    
<h6>Nightz - Development: JavaScript, HTML, CSS; <a href="mailto:nightz@revokedowl.xyz">Contact</a></h6>
