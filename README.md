# Finance Frenzy

---

:shipit:
This game was made in forty-eight hours
for the 2015 [Static Showdown Hackathon](http://www.staticshowdown.com/).

---

![](https://www.filepicker.io/api/file/xbWYHXK4RmyTqPRLi5gu)

## Do you like shouting at your friends and pushing buttons!?

Do you like amortizing the unmarketable parcel? Or divesting the arbitrage!? Finance Frenzy is a **real-time in-person cooperative party game for 2 to infinity players** inspired by [Spaceteam](http://www.sleepingbeastgames.com/spaceteam/). Each player needs a desktop computer or Android device running [Google Chrome](https://www.google.com/chrome).

## How to play

Invite friends to your game lobby by sending them your unique URL. All players should be physically next to each other in the same room. When the game starts, everyone will be shown a randomly-generated financial message pulsating at the top of the screen. Shout out the message, find that button, and push it quick!

![](http://i.imgur.com/rNhE4YF.jpg)

Want to create your own shouting party game!? It's easy! Just edit the words in the `corpus.json` file and fire up the game! Practice your French homework by adding your personal vocab list! Turn learning into a crazy fun party!

And it's fully responsive! So try it on your Android phone or tablet!

## Technical Details

Firebase handles anonymous authentication and data synchronization across clients. All graphical elements consist of web components ([Polymer](https://www.polymer-project.org/)) with messages passed through element attributes on the client, and [firebase-elements](https://github.com/polymer/firebase-element) synchronizing data across clients.

On page load a randomly-generated game id is used to instantiate a "game-panel" web component that is bound to a child node in Firebase. Anyone who joins a game with the same id in the URL hash has their session authenticated anonymously with Firebase before being added to that game's lobby. Once all players mark themselves as "ready", the game begins.

A master "task list" is generated from the list of verbs and nouns in corpus.json which, it turns out, is [incredibly hard to manage in Firebase](https://www.firebase.com/blog/2014-05-06-synchronized-arrays.html). Tasks get popped off that list one-by-one until all are completed (or failed) and the next round begins. Failed tasks or incorrect button pushes remove a life. Once all lives are lost, the game ends. Good luck!

## Known bugs

- Sometimes if you're the first person to join a game lobby it will show two people instead of one. Simply refresh the page to fix this. We'll fix this later, we promise!
- It's buggy in iOS and Safari for some reason. And maybe Firefox?

![](http://i.imgur.com/6HefW5C.jpg)

## Feedback from the judges

### 1
> Wow, this is intense. The animations are over the top haha.
So I didn't understand what was happening until I read the about page, and there was a lot going on.
The lobby room was very well done. You just need a "how to play" option up front.

### 2
> Wasn't able to figure this one out. ;) Tried playing, but I didn't quite get how it worked.

### 3
> Fun idea, the graphic design and behaviors are super distracting and irritating though! Sorry!
