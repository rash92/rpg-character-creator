make character creator for DnD with simplified rules in a way that is theoretically extensible to other editions and other games (e.g. sf's game)

business logic:
    - probably in main.js
        - load a list of (RPG) classes from files
        - implement rules of DND character creation/ other game?
            -maybe do two super simple RPGs first and then add DND/ real games later
        - switch to which game to load rules for

UI:
    - pick which game's ruleset
    - design the UI

do stupidest possible way to get list of files to the renderer. Whether in webpack or not. figure out list of files reading stuff.

how to deal with copying files etc.
https://webpack.js.org/guides/asset-management/

ipc renderer stuff:
https://www.electronjs.org/docs/latest/api/ipc-renderer


figure out how to send information from dropdown menu selection back and forth. e.g. allow selecting game and then changing what is rendered based on that. At the moment have basic dropdown in app.jsx with html, can try to send that info. Other option, built in menu:

https://www.electronjs.org/docs/latest/api/menu
