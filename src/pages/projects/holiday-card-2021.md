---
title: Holiday Card 2021
draft: false
date: 2021-11-30T11:00:10.338Z
link: https://www.mreyes.info/card2021/
image: https://res.cloudinary.com/keolasin/image/upload/t_mreyes_default/v1638242553/Artboard_1_ljchwd.png
imageAlt: Holiday Card 2021 featuring Bisbee
---
## Summary
For the 2021 Holiday Season, I wanted to send a digital invite to a holiday party I was hosting, and have a card to send to family in the mail.

## Inspiration
After looking at a few different holiday cards from years past, I decided to keep the design very simple, but wanted to have some subtle animation for the digital invitation. As well, it had been 1 year since I got my dog, Bisbee, and I wanted to celebrate him in some holiday fashion. The christmas lights on the final design are very similar to the ones I put up every year - with larger, bulbous casings and vibrant hues. [Check out the moodboard I made for this project.](https://www.behance.net/collection/189571649/Holiday-Card-Inspiration)

## Design
I created both a mobile and desktop design of the card, because I wanted to ensure people who I would text the invitation to would have an enjoyable experience on their mobile device. After some low-fidelity sketching with some sharpies and scrap paper, I created final design using Adobe Illustrator. I particularly enjoyed making the Bisbee logo - he looks good in his Santa Hat!

## Animation
I thought of a few ways to send the digital invite, from something as straightforward as a `.gif`, but I really wanted to add something to my site and experiment with `CSS` in a way I hadn't before. I ultimately settled on exporting the design paths from Illustrator as an SVG (Scalable Vector Graphic), since I could easily tweak the design in code.

Mainly, I wanted the individual light bulbs to light up, so I learned how to use the `<animate ... />` tag to change the colors of the bulbs while the page is being viewed. It took some tampering to make sure the `font-family` was imported properly and applied to the `<text>` tags that are part of the overall `<svg>` component. As well, I had to familiarize myself with the `<svg>` that was output from Illustrator. Ultimately, having the distinct layers from the Illustrator file sorted by `<g id="layerName">` tags was particularly helpful in identifying the paths I needed to animate.

## Final Design
You can [view the live design here](https://www.mreyes.info/card2021/). 

It's responsive, and the RSVP text are actually `<a>` tags that link out a pre-filled email so those invited can easily reply.

## Final Thoughts
I'm glad I learned how to work with SVGs in code and making the designs really pop - it was something I hadn't done before. In the future, I would likely still use the combination of CSS and SVGs for similar projects, but for designs that have varying font-families imported, I would likely need to think of something different to avoid having my site importing too many fonts and slowing it down in the process. 

For the design, I'm particularly glad I added the snowflakes - they really helped give the card more texture overall and prevent it from feeling too flat.