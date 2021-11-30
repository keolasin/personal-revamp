---
title: Portfolio Redesign
draft: false
date: 2020-02-12T08:00:00.000Z
link: https://www.behance.net/gallery/132260405/Portfolio-Design-Code?
image: https://res.cloudinary.com/keolasin/image/upload/v1638256006/Cover_tbnmq0.png
---
## Summary

The goal was to showcase my photography, share my work and project experiences, and share some information about myself. To meet these goals, I needed the site to be:

1. Accessible
2. Beautifully responsive
3. Easily navigable
4. Quickly loaded
5. Easy to add content

I first designed the site in [Adobe XD](https://www.adobe.com/products/xd.html) and developed the site using [Gatsby](https://www.gatsbyjs.com/). Over time, as the needs for the site changed, I did some quick redesigns and addition of features.

You're on the live site now, so make sure to check it out!

## Design

At the time, I was looking into what other developers were doing for their portfolio and project sites. There are some really cool sites out there, most of which I found through [Dribbble](https://dribbble.com/). 

Since I do a lot of [photography](https://www.mreyes.info/albums), I wanted the site to have a section solely devoted to my photos, and the overall site needed to feature my photography. I wanted the site design to be simple and not detract from the photography itself.

Next, I wanted to make sure I had a space to showcase work and projects I've done, so the projects page was born. Initially, it was a very simple text bulletin list, and not too flattering but it got the job done. In the redesign, I've transformed the project section to use a card-grid layout, include photos, and have long-form posts describing it (such as this one). You can [check out the early design and prototypes here](https://www.behance.net/gallery/132260405/Portfolio-Design-Code?)

## Prototyping and User Testing

Through Adobe XD, I made some high-fidelity prototypes and shared it with friends and family, since those are the ones who I imagined would be viewing the photography most frequently. As well, I shared it with a career counselor who gave me valuable feedback. 

### General Feedback

The main feedback I received from everyone was that it would be good to include a picture of myself, but not displayed so prominently - it was detracting from the rest of the site. As well, the contact page needed to include working links, so that the user could easily navigate to my github or linkedin without having to copy and paste the full link into their browser.

### Albums Feedback

Friends and family were interested in the photography, but wanted an easier way to navigate the photographs and date albums chronologically. As well, the first design required users to click a photo in an album, view the photo in a large modal, then close out of the photo and select the next one, and repeat the process. Doing this for each photograph was very slow, especially since the album thumbnails weren't particularly large. In the redesign, users could now click the photograph, then select the previous or next photo from that same page using arrows on either side of the photograph in an endless loop. This worked much better in the long run.

### Projects Feedback

Here, the main criticism was that the brevity of the project description wasn't doing me any justice. I needed to give each project it's own page and blog posting, with a photo, and a link to the live site so the portfolio could really shine and potential employers could experience the work itself.

## Coding

To meet these goals, I decided to use Gatsby (built on React and GraphQL) to create the site and programmatically add content, Netlify CMS for easy content management, and deployed the site using Netlify.

Make sure to [check out the github](https://github.com/keolasin/personal-revamp/blob/master/README.md) for the site if you're interested in the code and site structure. This was my first site built with Gatsby and I'm particularly proud of it. All of the site assets are [phosted through cloudinary](https://cloudinary.com/), and pre-processed through Gatsby. This site was a great experience to hone my skills in front-end development using React and HTML/CSS/JS.

## Redesign

While coding the site, I realized there were things I wanted to be different and made the site easier to navigate for myself personally. I changed the static background on desktop to a video I shot, fixed albums page for my photographs so each album thumbnail was more easily displayed along with a hover-effect for the album title, and re-coded the index and contact pages to be easily edited through the Netlify CMS, instead of requiring me to regularly push changes on the code itself.

As well, the redesign incorporated better user experience core functionality - on mobile, the links and navigation buttons were moved to be lower, where a user will be able to use their thumb to press, rather than having to tap a button at the top of the mobile device. As well, the site was designed to be mobile-first, even in the code: all the CSS starts with the smallest viewport as default, with additional `mediaQuery`'s at larger breakpoints, up until the desktop view. Only at the desktop view does the site allow the video to be rendered, saving mobile users on data when they visit the site.

## Final Thoughts

I really enjoyed making my portfolio site - it was something I had always wanted to have, largely as a curated space for me to showcase my art and work uniquely my own. As well, I appreciated the challenge - there were many weird bugs and glitches in getting my Gatsby site up and running, and now that a newer version of Gatsby is out, I'm excited to migrate to the new version and make use of some of those new features. In the future, I'm hoping to add a better content tagging system and filter/search tool for visitors to the site, as well as an archive by year for various albums/photographs. 

As well, I wish I had started the coding process by incorporating testing earlier - it wasn't until I had many features completed that I decided to add [cypress](https://docs.cypress.io/guides/overview/why-cypress) and [jest](https://jestjs.io/) testing in an effort to do Test-Driven Development.

Finally, I learned a lot on this project, and wouldn't have done so without the great documentation - I highly recommend the [gatsby documentation](https://www.gatsbyjs.com/docs/), and [emotion CSS-in-JS docs](https://emotion.sh/docs/introduction). 

## More info

Since this was built using Gatsby, check out their [wonderful documentation](https://www.gatsbyjs.org/). Their tutorials and recipes were helpful and clear.

For content management, I used Netlify CMS - check out the [netlify-CMS docs](https://www.netlifycms.org/) as well.

Finally, I deployed the site first through [vercel](https://vercel.com/dashboard) (formerly Now), then ultimately switched to [netlify](https://www.netlify.com/) since the integration with the Netlify CMS was a little more seamless and allows me to preview builds and deploys prior to pushing to the production (live) branch of the site.