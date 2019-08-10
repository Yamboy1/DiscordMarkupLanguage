# DiscordMarkupLanguage
Discord Markup Language is a simple, yet powerful markup language to help interact with the DiscordApp API with ease, and to help beginning developers create dynamic and extensive first-time bots for their servers!

<h1>Installation</h1>
Requiered: <a href="https://nodejs.org/en/">Node.Js LTS</a>

Download this repository as a .zip > extract the files > open your terminal of choice > use `cd` to get to the path with DML > run `node index.js`. This will auto generate the requiered `bot.dml` file, and an example `ping.dml` command.
<h1>Example Ussage</h1>
<h6>The bot.dml file, a requiered setup file for all users to configure to bots code with its 
owners and token, as well as all of the bots events.</h6>

```html
<settings>
    <prefix>/</prefix>>
    <owner>583295728349462947</owner>
    <token>dehsNbNbhj638e9.hfenf.fnjENJFB_frbref.vfhehd_NBU_pfnJGJn</token>
</settings>
<startup> channel='462i4552035622942'embed='true color='#FFFC33'>The bot has successfully booted with ping: {{bot:ping}}ms</startup>
```

# Documentation
This is the documentation for the Discord Markup Language. Listed below are all of the languages <tags>, and what they are used for. Tags should be used in this format: <tag>Information</tag>. Tags with a filled jotdot, •, means that this tag is mandatory for the bot to run. However, tags with an empty jot dot, ◦, means that this tag is optional. A 'subtag' is a tag that goes inside two tags. It will be listed in the documentation underneith its corosponding maintag. For an example of a subtag, please see the example above of bot.dml. The 'subtags' are tags such as <prefix>, that can be found in-between the <settings> tags. Make sure that all 'subtags' are indented and down a line from the main tag. Sometimes, tags will have attributes stored inside them. For an example of these attributes, please see the example above of bot.dml. The attributes are things such as 'channel=' that you can see inside the <startup> tags. These attributes should always be a 'sting' (inside quotes), and are marked in the documentation with a triangle, ‣, underneith its corosponding <tag>. Next, we have DML external calls. These external calls are calls to the DiscordApp API, that can help a user recive info from the Discord API. External calls look like this {{bot:ping}}. This specific example would get the ping of the bot, and display it. These can be used in any text field in any file. For an example, see the example of `bot.dml` above. You will notice under the <startup> tag, an external call is used. In this partiular example, the bot would send to the thartup channel "The bot has succesfully boted with ping: 19ms" (19ms is an example. The "19" would be hwatever your current bots connection speed is"). DML external calls can be found at the very bottom of the docs. For command files, you will need to goto path../markup/commands and add all your files there. Your command file names should be CommandName.dml. To run your code, goto The folder where you keep your DML and bot's files, you should see `index.js`. Open a terminal of choice, and use command `cd` to get to that path. Then, when youre here, run `node index.js`.
  
  
<blockquote style="border-left: 5px solid #34baeb">Required Files: bot.dml</blockquote>

* Settings (Requiered tag - File: bot.dml)
```html
<settings> This tag is where you will store the settings config information. File: bot.dml
    <prefix>string</prefix>
    <owner>string</owner>
    <token>string</token>
</settings>
```
* Logging (File: Bot.dml)
```html
<startup channel='string' color='hex' embed='boolean'>string</startup>
```
* Embed Syntax (File: Command File
```html
<response> This tag is used for the bot to send a response message when a command is used. File: Command File
    <console>string</console>
    <embed>
        <author>string</author>
        <description>string</description>
        <feild title='string'>string</fields>
        <color>hex</color>
        <thumbnail>url</thumbnail>
        <footer timestamp='boolean' image='url'>string</footer>.
    </embed>
</response>
```
* Arguments (FIle: Command File)
```html
<arg value="Text> This tag is used tpo create an argument. An argument, is like another part to a command. For example, if the value is "1", and your command name is "ping.js", then when you run "!ping 1" it will run whatever is inside the argument "1". You can use as many arguments as needed in your file. All of the subtags that can be used inside the <response> tag can also be used inside the <arg> tag. NOTE: The closing tag for an argument is </arg> File: Command File.
```


* DML External Calls - These are used to call information from the Discord API (FIle: Command File)

* Bot Calls
```
{{bot:ping}} Displays the bots current ping speed in milliseconds
{{bot:avatar}} The bot's avatar
{{bot.createdOn}} Displays a timestamp when the bot was created
{{bot.id}} Displays the bot's user ID
{{bot:presence:status}} Displays the bots current Disocord presance
```
* Member Calls
```
{{memer:tag}} The Name#0000 tag of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:username}} The Name wihtout the #0000 of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:avatar}} The avatar of the member that was defined in the <require> tag Requiers: A <require> tag
```
* Author Calls
```
{{author:username}} Displays the command authors Name without the #0000
{{author:tag}} Displays the command authors Name#0000 tag
{{author.id}} Displays the user ID of whoever requested a command.
{{author:avatar}} The avatar of the command
{{author:createdOn}} Displays when the command authors discord account was made
{{author:isBot}} Dislays if the command author is a bot
{{author:presence:name}} Displays the comand authors current Disocord presance name
{{author:presence:details}} Displays the comand authors current Disocord presance details
{{author:presence:state}} Displays the comand authors current Disocord presance details
{{author:presence:time:start}} Displays the comand authors current Disocord presance start time
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
          
          
# This is the end of our documentation. If you find an issue, please let us know on our support server, <a href="https://discord.gg/DPqH5dW">found here</a></h5>
