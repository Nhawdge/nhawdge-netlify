---
title: Making a dumb thing for no reason - SVG Pie Chart
date: 2022-01-22T07:55:04.798Z
description: A short adventure in SVGs
type: Blog
---
I finally completed a project I've been wanting to complete for a long long time. I made a Pie Chart generate with SVGs. You might be thinking, haven't others already done this? Why yes they have. But it's like making your own JS framework or CMS, it's about the learning experience and not the end product. There were a few problems that were absolutely insane set backs. I'll cover them briefly. Maybe I'll do a tutorial on it? I don't know. (Hint: I won't)

[Pie Chart Maker](https://nhawdge.net/piechart.html)

### Sine(0) is 0 and Cosine(0) is 1
Okay so if you forgot your high school math (I did). You might be thinking your SVG needs to start pointing up, or (0,1). But that's quite wrong. Your first angle is 0 and so you start by pointing right. (1,0). If you have your first point wrong, everything after that is wrong. 

### SVG Arcs and Canvas Arcs are not the same
SVGs use Arcs from the perspective of a pen, not from the perspective of a command. If you've ever drawn an arc in Canvas, it's pathetically easy. You provide the center of the circle, then the starting angle, and the ending angle. Literally drawing a slice of the pie. Wow so easy. SVG arcs are different. Their first (implied) argument is the position of the starting point of the arc. You get this by using `m|M`ove or `l|L`ine in your `d`raw attribute on your `<path>` element. Then when you use `a|A`rc you provide the x and y radius of the circle (if they are the same) or ellipse (if different). The starting angle of the slice comes next. Then you need to indicate if this arc will go over 180 degress, set the "large arc" flag to 1. Next argument is the Axis rotation (always 0 for pie charts) This lets you invert your arcs, probably for real drawing. Last two arc arguments are providing the end x/y points for the arc. Finally you need to close it automatically with `z` or by drawing a line back to your center point. 

### Watch your offsets for each slice
Last, and probably the easiest problem. The arcs look really bad when you screw them up. Like really bad. Like shovel to the face bad. It's important you can read SVG draw paths and figure out where the start and end points are, and if that is in fact correct. 

I hope someone finds this on accident and gets mad about how little detail I provided. Then realizes all the source is in that one file linked above. Then sorta figures it out, but gives up and just steals my code. 

Happy Coding. Or something
