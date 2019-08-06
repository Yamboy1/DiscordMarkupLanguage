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
<startup> channel='462i4552035622942'embed='true color='#FFFC33'>The bot has successfully booted!</startup>
```

# Documentation
This is the documentation for the Discord Markup Language. Listed below are all of the languages <tags>, and what they are used for. Tages should be used in this format: <tag>Information</tag>. Tags with a filled jotdot, •, means that taht tag is mandatory for the bot to run. However, tags with an empty jot dot, ◦, means that this tag is optional. A 'subtag' is a tag that goes inside two tags. It will be listed in the documentation underneith its corosponding maintag. For an example of a subtag, please see the example above of bot.dml. The 'subtags' are tags such as <prefix>, that can be found in-between the <settings> tags. Make sure that all 'subtags' are indented and down a line from the main tag. Sometimes, tags will have attributes stored inside them. For an example of these attributes, please see the example above of bot.dml. The attributes are things such as 'channel=' that you can see inside the <startup> tags. These attributes should always be a 'sting' (inside quotes), and are marked in the documentation with a triangle, ‣, underneith its corosponding <tag>.
  
  
```•Requierd Files: bot.dml
•<settings> This tag is where you will store the settings config information. File: bot.dml
    •<prefix> This tag is a subtag for <settings>. This tag is where you will store your bot's command prefix File: bot.dml
    •<owner> This tag is a subtag for <settings>. This tag is where you wll store the bot owner's User ID. File: bot.dml
    •<token> This tag is a subtag for <settings>. This tag is where you will store your bots token. FIle: Bot.dml
◦<startup>This tag is used for storing your bots startup event information. File: bot.dml
    ‣channel: This variable is used to store the channel ID of where you want your startup message to send
    ‣embed: This variable should be set to 'true' if you want your startup message to be embedded. Otherwise, it should be set to 'false'.
    ‣color: If your message is an embed, set this variable to a HEX color code starting with '#'. Otherwise, leave this variable blank.
◦<response> This tag is used for the bot to send a response message when a command is used. File: Command File
    ◦<embed> This tag can be used if you want your bots response to be an embedded message. File: Command File
        ◦<author> This tag is where the Author text of your embed should be stored. File: Command File
        ◦<description> This tag is where the Descrition text of your embed should be stored. File: Command File
        ◦<Feild ‣Title> This tag should be used to make an embed text feild. THe ‣Title attribute should be set to the title of the embed. In between the beginning and closing tags should be the value test of the embed. NOTE: THe closing tag for this tag does                         NOT include the attribute. This tags format should be: <Feild Title="Title>Value</Feild>.
        ◦<color> This tag should be set to a HEX color ID, starting with a '#'. It will be the color of your embedded response.
        ◦<thumbnail> This tag should be an image URL that will be displayed at the embeds thumbnail image.
        ◦<footer ‣timestamp ‣image> This tag will be used to set your embeds footer. The 'timestamp' attribute is a boolean, and will be set either to 'true', or 'false'. If you want your embeds footer to incude a timestamp of when it was sent,                                       set this attribute to 'true'. Otherwise, set it to 'false'. If you want your embeds footer to have an                                         small image icon, then the 'image' attribute should be set to an image URL. Otherwise, don't include this                                     attribute. NOTE: THe closing tag for this tag does NOT include the attribute. This tags format should be:                                     <Footer timestamp='true' image='https://AnImage.png'>Footer Text</footer>.```
          
          
This is the end of our documentation. If you find an issue, please let us know on our support server, found here: https://discord.gg/DPqH5dW.
