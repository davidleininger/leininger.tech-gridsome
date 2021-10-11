---
title: No Shadow Screenshot
pageTitle: today I learned | leininger.tech
TILIndex: 22
date: 2021-08-10
---

You know what really grinds my gears? When you take a screenshot on a Mac, hit the space bar for the whole app, and the dang screenshot comes with a shadow. I didn't want the app with it's shadow, I just wanted the app window. I've know for a long time that you could just hold the `option` key and it would remove the shadow.

If only there was a way to make all screenshots happen with no shadows. Well, guess what? There is. Here's how. Open your terminal and put in this command:

```shell
defaults write com.apple.screencapture disable-shadow -bool true ; killall SystemUIServer
```

Voilà! Take your screenshots with out shadows like God meant them to be.
