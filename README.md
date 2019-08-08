# DiscordMarkupLanguage
Discord Markup Language is a simple, yet powerful markup language to help interact with the DiscordApp API with ease, and to help beginning developers create dynamic and extensive first-time bots for their servers!

# Installation
Coming Soon!

# Example Ussage
```html
<!--The bot.dml file, a requiered setup file for all users to configure to bots code with its 
owners and token, as well as all of the bots events.-->

<settings>
    <prefix>/</prefix>>
    <owner>583295728349462947</owner>
    <token>dehsNbNbhj638e9.hfenf.fnjENJFB_frbref.vfhehd_NBU_pfnJGJn</token>
</settings>
<startup> channel='462i4552035622942'embed='true color='#FFFC33'>The bot has successfully booted with ping: {{bot:ping}}ms</startup>
```

# Documentation
This is the documentation for the Discord Markup Language. Listed below are all of the languages <tags>, and what they are used for. Tages should be used in this format: <tag>Information</tag>. Tags with a filled jotdot, •, means that taht tag is mandatory for the bot to run. However, tags with an empty jot dot, ◦, means that this tag is optional. A 'subtag' is a tag that goes inside two tags. It will be listed in the documentation underneith its corosponding maintag. For an example of a subtag, please see the example above of bot.dml. The 'subtags' are tags such as <prefix>, that can be found in-between the <settings> tags. Make sure that all 'subtags' are indented and down a line from the main tag. Sometimes, tags will have attributes stored inside them. For an example of these attributes, please see the example above of bot.dml. The attributes are things such as 'channel=' that you can see inside the <startup> tags. These attributes should always be a 'sting' (inside quotes), and are marked in the documentation with a triangle, ‣, underneith its corosponding <tag>. Next, we have DML external calls. These external calls are calls to the DiscordApp API, that can help a user recive info from the Discord API. External calls look like this {{bot:ping}}. This specific example would get the ping of the bot, and display it. These can be used in any text field in any file. For an example, see the example of `bot.dml` above. You will notice under the <startup> tag, an external call is used. In this partiular example, the bot would send to the thartup channel "The bot has succesfully boted with ping: 19ms" (19ms is an example. The "19" would be hwatever your current bots connection speed is"). DML external calls can be found at the very bottom of the docs. For command files, you will need to goto path../markup/commands and add all your files there. Your command file names should be CommandName.dml. To run your code, goto The folder where you keep your DML and bot's files, you should see `index.js`. Open a terminal of choice, and use command `cd` to get to that path. Then, when youre here, run `node index.js`.
  
  
```•Requierd Files: bot.dml
•<settings> This tag is where you will store the settings config information. File: bot.dml
    •<prefix> This tag is a subtag for <settings>. This tag is where you will store your bot's command prefix File: bot.dml
    •<owner> This tag is a subtag for <settings>. This tag is where you wll store the bot owner's User ID. File: bot.dml
    •<token> This tag is a subtag for <settings>. This tag is where you will store your bots token. FIle: Bot.dml
◦<startup>This tag is used for storing your bots startup event information. File: bot.dml
    ‣channel: This variable is used to store the channel ID of where you want your startup message to send
    ‣embed: This variable should be set to 'true' if you want your startup message to be embedded. Otherwise, it should be set to 'false'.
    ‣color: If your message is an embed, set this variable to a HEX color code starting with '#'. Otherwise, leave this variable blank.
◦<require member= "User ID"> This tag is used to call a `member` object. This object can be used later with DML external calls such as {{member:tag}} that would call this users tag. File: Command File
◦<response> This tag is used for the bot to send a response message when a command is used. File: Command File
    ◦<console> This tag is used to print a response to console. File: Command File
    ◦<embed> This tag can be used if you want your bots response to be an embedded message. File: Command File
        ◦<author> This tag is where the Author text of your embed should be stored. File: Command File
        ◦<description> This tag is where the Descrition text of your embed should be stored. File: Command File
        ◦<Feild ‣Title> This tag should be used to make an embed text feild. THe ‣Title attribute should be set to the title of the embed. In between the beginning and closing tags should be the value test of the embed. NOTE: THe closing tag for this tag does NOT include the attribute. This tags format should be: <Feild Title="Title>Value</Feild>.
        ◦<color> This tag should be set to a HEX color ID, starting with a '#'. It will be the color of your embedded response.
        ◦<thumbnail> This tag should be an image URL that will be displayed at the embeds thumbnail image.
        ◦<footer ‣timestamp ‣image> This tag will be used to set your embeds footer. The 'timestamp' attribute is a boolean, and will be set either to 'true', or 'false'. If you want your embeds footer to incude a timestamp of when it was sent, set this attribute to 'true'. Otherwise, set it to 'false'. If you want your embeds footer to have a small image icon, then the 'image' attribute should be set to an image URL. Otherwise, don't include this attribute. NOTE: THe closing tag for this tag does NOT include the attribute. This tags format should be: <Footer timestamp='true' image='https://AnImage.png'>Footer Text</footer>.
◦<arg value="Text> This tag is used tpo create an argument. An argument, is like another part to a command. For example, if the value is "1", and your command name is "ping.js", then when you run "!ping 1" it will run whatever is inside the argument "1". You can use as many arguments as needed in your file. All of the subtags that can be used inside the <response> tag can also be used inside the <arg> tag. NOTE: The closing tag for an argument is </arg> File: Command File.

<!-- DML external calls->
<!--Bot Calls-->
{{bot:ping}} Displays the bots current ping speed in milliseconds
{{bot:avatar}} The bot's avatar
{{bot.createdOn}} Displays a timestamp when the bot was created
{{bot.id}} Displays the bot's user ID
{{bot:presence:status}} Displays the bots current Disocord presance

<!--Member calls>
{{memer:tag}} The Name#0000 tag of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:username}} The Name wihtout the #0000 of the member that was defined in the <require> tag Requiers: A <require> tag
{{member:avatar}} The avatar of the member that was defined in the <require> tag Requiers: A <require> tag

<!--Author calls-->
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

<!--Guild Calls-->
{{guild:name}} The name of the guild the command/event was run
{{guild:owner}} The owner of the guild the command/event was run
{{guild:owner:nickname}} The nickname of the guild's owner the command/event was run
{{guild:owner:id}} Thd id of the guild's owner the command/event was run
{{guild:owner:createdOn}} When the owner of the guild the command/event was run on account was created

<!--Message calls>
{{message:content}} Displays the message content that triggered the command/event (For commands, the command name)


          
          
# This is the end of our documentation. If you find an issue, please let us know on our support server, found here: https://discord.gg/DPqH5dW.
