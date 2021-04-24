---
title: Memory Game Post Mortem
date: 2021-04-24T19:10:50.388Z
description: Memory Game Post Mortem
tags: []
type: Project
---
[GitHub Repo](https://github.com/Nhawdge/memory-game)
[Playable Game](https://github.nhawdge.net/memory-game)




## Why I did it.

When I first got into code, I thought simple games were the way to go. They are easy enough the rules are well defined, and the interface can be garbage. I tried to make a guess who board, but that fell apart when I had to deal with multiplayer. So I went to a simple memory game. 

Oh boy did I bomb it hard. I thought that needing two variables to track current and previous card was unacceptable, and I was a bad coder who would never get better, I mean obviously a good programmer could write this with fewer variables. If you're new, the quantity of variables means nothing. The only metric you can use it for us number of variables. So I gave up, cause that was easier.

A couple months ago, I said hey it's been a few years since I tried this, why not take another stab at it. Turns out I knocked it out in only a couple hours. 

## Why I chose my tech stack.

I picked [vanilla JavaScript](http://vanilla-js.com/) since I was just getting familiar with using [GitHub pages](https://pages.github.com/) to put out projects that needed no backend. GitHub pages is a very very useful tool in your tool belt.

## What challenges I faced.

This was a pretty straight forward project. Show a bunch of pictures in duplicates, and when someone has selected two of the same picture, remove it. One common complaint about JavaScript is the lack of a sleep or wait function. With some JavaScript experience I easily picked out setTimeout to let the cards show for a few seconds so a user had an opportunity to memorize them before they flipped back over. 

When I (re)approached the problem I didn't even need to consider my old mindset of using 2 variables to track current and previous cards. I actually leveraged the power of selectors to check which cards were visible. Sure this is a terrible mixing of duty (data is stored in markup) but it worked really slick, and this is just a fun project after all. 


## What it looks like when finished
Right now, it's basically done. I don't have any more interest in adding anything besides more images/decks to play with. I've gotten feedback that I should make the grid stay solid so it plays more like the IRL cards version, but I think you're either going to memorize order or you're going to memorize row/col positions. Either way your memory is being tested. 
