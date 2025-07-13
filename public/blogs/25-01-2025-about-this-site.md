---

title: About This Site
date: 25-01-2025
author: Ruben Lopes  
description: A technical overview of my website, the stack I used, and what you can expect to find here.  
tags: tech stack, website 
icons: vine-leaf:grommet, monstera-leaf:grommet, linden-leaf:grommet, oak-leaf:grommet, maple-leaf:grommet, ginkgo-leaf:grommet, falling-leaf:grommet, chestnut-leaf:grommet, solid-leaf:grommet, zigzag-leaf:grommet, leaf-skeleton:grommet, leaf-swirl:grommet, flamed-leaf:grommet, curled-leaf:grommet
image: /images/Rubens Portfolio.png
hidden: false

---

# About This Site

<img src="/images/Rubens Portfolio.png" alt="Ruben's Portfolio">

So a bit more about this site. I built it using React with a lot of the styling done with tailwindcss. This site *(even this blog)* is all staticly generated and hosted on [github pages](https://github.com/ru4en/portfolio).

I wont lie, this was wayy too over-engineered for a personal site, but I wanted to learn more about React and typescript, so I went with it. I also wanted to have a blog, so I added that too.

A lot of the components are custom made, eg, this blog generator: it reads the [markdown files](blogs/25-01-2025-about-this-site.md) in the `public/blogs` folder and generates the blog pages.`

One of the things I'm most proud of is the terminal component on the homepage. It's a custom component that emulates a terminal. I have a few commands that you can run, and it will output some text. It's a bit of a gimmick, but I thought it was cool addition.

I also have a few other custom components, like the background of this page. It's a custom component that generates a random icon and places it at a 45-degree angle on the page. I can choose them from font-awesome icons, devicons, or meterial icons which i think is pretty neat.

One nice things about this repo is that it also has a workflow that will not only build and deploy the site, but also generate my cv from a LaTeX file and deploy that too. I'm pretty happy with how it turned out *just need to remember to update it every now and then*.

so yeah, that's about it. I hope you enjoe the site and find something useful here. I will try to keep this blog updated with new stuff I learn and do.
