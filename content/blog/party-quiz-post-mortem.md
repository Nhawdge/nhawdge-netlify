---
title: Party Quiz Post Mortem
date: 2021-05-07T18:22:58.864Z
description: Party Quiz Post Mortem
type: Project
---
[Github Repo](https://github.com/Nhawdge/party-quiz)

[Playable Demo](http://nhawdges-party-quiz.herokuapp.com/)

## Why I did it.

This is one of my favorites, I was inspired by a now removed web implementation of the game code words. We played codewords early in the pandemic-work-from-home life during a team get together. Combine that, with a recent holiday trivia game we did in the office, and I thought I had a good idea for a real time quiz game... and let's be honest I wanted to learn web sockets. 

## Why I chose my tech stack.

* Node.js with express
* Socket.io
* Knockout.js

Early in I was just trying to mimic the existing code which used node.js and socket.io. For the user experience I'm quite handy with knockout, and I wanted to not learn another thing while doing something new aka web sockets.

I don't want there to be any confusion, I list express but I only use it as the static server so I can use the same port for the web sockets server. I am no express guru.

## What challenges I faced.

### Web Sockets

This was my first foray into web sockets. I am pretty familiar with web development at this point, but it's always been in a server only has one job, and the user interacts with one piece at a time. Web sockets at it's core can act like a high frequency ajax polling function. But when you add other users you get a much much different programming experience.

For example, you start with a lobby, and your lobby needs a creator or some reason to exist, in my case a host. This is pretty easy to understand, when a user joins you check if there is a room and if it doesn't exist register one. If it does exist you need to join the room, and then update the state. That's not a terrible task, but it does open up the questions, what does it look like to someone who is in the lobby waiting? Or what if someone is connected but hasn't entered their name yet? Is the host about to start the game? The state management code is gonna get intense. 

This is easily the biggest hurdle I faced. At the time my state management skill needed work. I understood the concepts, but having multiple roles, host and participants, that can change each other's state is a bit rough to wrap your head around.

Having solid experience with event driven languages is very helpful before you start web sockets.

### Question types

Back in December pre pandemic, my company had a holiday party. The most popular party game was a simple holiday trivia quiz. Obviously this would be way easy I mean it's just a couple inputs no big deal. Until I started to pick it apart. 

One question is to say which year a movie came out. Now you can easily make that multiple choice, but more often than not, multiple choice gives you the power of deduction. The original quiz had only a blank line. So I added a range slider. Well you can't just have 1-3000 that's hard to narrow down, so I set restrictions. Now I could put it between 1950 and the current year. That is a much better experience. A couple questions later was to guess the number of Xmas trees in the office. I was able to reuse my limits to make it reasonable numbers. What a great solution.

Another weird issue is always how nitpicky you can get with answers, when asking the names of Santa's reindeer, how many wrong answers do you include in a check box scenario? Do you limit them? Do you only count correct answers? Should this be an input and we check spelling? I don't know most of these answers. Probably a better question for an education expert.

## What it looks like when finished.

Well right now I've put it on the back burner with like everything else. It's hard to find time to get my brain into the right context I need for debugging everything. If you run it right now it's a solid tech demo and you can even try it on Heroku today.

Hopefully some day I'll make some time to get a single working quiz.