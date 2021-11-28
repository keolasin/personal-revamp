---
title: Chat App Redesign
draft: true
date: 2021-11-27T19:27:11.639Z
link: https://bloc-chat-react.vercel.app/
---
Check out the full design on [Behance](behance.com).

## Summary

When I was first learning how to code as part of a full-stack engineering bootcamp, I made a simple messaging application I nicknamed "Chatter." I wanted to revisit the app and give it a redesign now that I have more development and UX design skills, two years later.

## Goals

We want the site to be:

- responsive
- accessible
- usable
- appealing!

As well, we have core functions that the user desires. So, the user should be able to:

- sign in (authenticate)
- send and read messages
- create and delete chatrooms
- toggle the theme

## Old Design and Functionality

Just to see what we're starting with, we have a very clunky, unresponsive site that isn't particularly user friendly. Let's fix that.

The app uses a React front-end (bootstrapped from `create-react-app`), and stores the messages in a firebase database on the backend, with the live site deployed through vercel. 

Since I want to focus on the user experience for this redesign, I won't be tampering too much with re-coding the whole site, mostly the HTML/CSS where necessary.

## Mood Board

For inspiration, I tried out a few messaging apps and checked out some bulletins.

## Brand Guide

For this project, I created a short brand guide and brand-star to help guide the design.

### Color Palette

For the color palette, I wanted to follow best practices and choose two main colors, one as a primary and one as a secondary, then use a shade of each color for accents. As well, I chose two gray tones to go with the design. Since the app has a theme toggle, we have a "Light" and "Dark" theme.

### Typography

Here, I selected a sans-serif font, *Questria*, for our headers and emphasis. *Rokkitt*, a serif font, is used for body and paragraph text.

## Low Fidelity Design and Wireframing 

I've used Adobe XD and other Adobe products pretty extensively, so I wanted to try out **Figma** for this project. I like that it's browser-based, has similar features to Adobe XD, and the prototyping seems a bit more robust than XD.

I initially created some draft wireframes using shapes and text. 


### Atomic Design

Next, I wanted to learn how to better use a feature in Figma, **Component Variants**. I created several component atoms, molecules, organisms, and a template following [Atomic Design concepts](https://bradfrost.com/blog/post/atomic-web-design/). It took a little bit of practice, but I ultimately really enjoyed the ease and scalability of components given different properties.

## Prototyping

Following the wireframing, now that I had my component library ready to use, I created a user flow prototype for both dark and light themes. From the browser, the prototype was pretty easy to interact with, but using it on my mobile device was a bit buggy.

### Usability Testing

I asked a potential user to interact with the draft prototype in a co-creation session. Here are the main takeaways from that session.

#### Dark over light

Based on preference, the dark theme was "prettier". The peach color in the light theme was "a little much," particularly for the messages contrasted against the gray background of the messages container.

#### Sans-serif over serif

Sans-serif font was preferred for the body text of messages and inputting text in forms. An alternative suggested was to use a larger font if the sans-serif was going to be kept, or to ensure that the body text could be read easily. However, the Rokkitt font seemed to be fine in the large Sample paragraph text provided, so longer messages may be okay. Because messages can be as short as an "okay," I opted to switch to a sans-serif font, Dosis.

#### Buttons and background

The button colors needed more emphasis and to stand out against similar colored backgrounds. Buttons that have the same default color as the background card should be switched for another, stand-out color to improve usability.

## High Fidelity Design

Based on user feedback, adjustments were made to the brand guide and component library. Stand out UI elements and template pages are featured in the new design.

## Wrap-up

After settling on the proposed design, I took the design spec and used it to adjust the codebase for the live product. [You can view the final product here.](https://bloc-chat-react.vercel.app/) You can also see the [full design spec and case study on Behance](Behance.com) as well.

From this project, I'm particularly proud of learning Figma and applying atomic design principles to the design library. In the future, I would like to improve my Figma prototyping (the prototype viewed on my phone was very glitchy, but okay on browser), and perform more preliminary user research.
