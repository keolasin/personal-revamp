<p align="center">
  <a href="https://www.mreyes.info">Visit the site live at www.mreyes.info</a>
</p>
<h1 align="center">
  Portfolio site for MReyes
</h1>

## Overview

The goal was to showcase my photography, share my work and project experiences, and share some information about myself. To meet these goals, I needed the site to be:
  
  1. Accessible
  2. Beautifully responsive
  3. Easily navigable
  4. Quickly loaded
  5. Easy to update content

To meet these goals, I decided to use Gatsby (built on React and GraphQL) to create the site and programmatically add content, Netlify CMS for easy content updates without needing to dive into the code, and deployed the site using Vercel.

Below, you'll find information regarding the project structure and relevant files, followed by a brief walk-through of developing the site.

## Scaffolding

Top-level overview of the project structure:

    .
    ├── node_modules
    ├── src
        ├── components
        ├── images
        ├── pages
        ├── styles
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: Where the magic happens. Here we have the front-end code for the site, with sub-directories:
  
    a.  **`/components`**: Here we have site-wide components (such as buttons and layouts), along with components used for programmatically creating pages (such as the gallery view or individual photo view).

    b.  **`/images`**: Here we store our images, either in `galleries` or for site-wide use - just make sure to direct to use the right path for site-wide images. 
    
    _Note: This directory is ignored in our version control to avoid uploading large image files to github. Check out `.gitignore` to see what else is not watched by version control._

    c.  **`/pages`**: Components that are created as full pages in our site. `index.js` acts as our homepage `mreyes.info/`, while our `contact.js` component provides our `mreyes.info/contact/` page.

    d.  **`/styles`**: Our global styling - mainly used to create responsive breakpoints for our site design and maintain consistent typography site-wide.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of the code consistent.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This is where we programmatically create nodes in graphQL for each album and photos in that album. We also create the nodes for our markdown files here, and configure components to render the related information from template components in `src/components`.

7.  **`LICENSE`**: Gatsby is licensed under the MIT license.

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9. **`README.md`**: The file you're reading right now, hopefully it has been helpful.


## Local development

1.  **Fork the repository and set-up locally**

    Through github, you can fork this repository (repo).
    [Check the github docs on how to clone a repo to your local machine.](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)

    Be sure to download and install the dependencies listed in `package.json`. Using npm:

    ```shell
    npm install dependency-name
    ```

2.  **Check out the code locally and add an image directory**

    For images, you can create an `images` directory in the src folder. Photo albums are generated from a `galleries` sub-directory of images.

    ```shell
    mkdir src/images/galleries
    ```
    You can now add your photo albums to the galleries directory and add images to those albums! Albums will appear according to the name of its directory, and photos will be titled according to their file name.

    ```shell
    mkdir src/images/galleries/new-album
    cd src/images/galleries/new-album
    touch vacation.jpg barcelona.jpg
    ```

     Navigate into the site's directory and load it up in your browser using `gatsby develop`.


3.  **Open the source code and start editing!**

    Navigate back to the root directory and start editing!

    ```shell
    cd personal-revamp/
    gatsby develop
    ```

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `personal-revamp` directory in your code editor of choice (I use VSCode). Save your changes and observe the hot-reloading in your browser!

## More info

Since this was built using Gatsby, check out their [wonderful documentation](https://www.gatsbyjs.org/). Their tutorials and recipes were helpful and clear.

For content management, I used Netlify CMS - check out the [netlify-CMS docs](https://www.netlifycms.org/) as well.

I utilized Vercel (formerly Zeit now) to deploy the site - check out their [docs here](https://vercel.com/).

<!-- AUTO-GENERATED-CONTENT:END -->
