# Chalmers Entrepreneurship Society - Website
Fellow entrepreneur,

If you are reading this, you are likely an IT or PR person at CES. Or at the very least a part of the CES board, congratulations! The website is important to preserve the CES brand, aswell as a way for members to register and for companies to find us. Therefore, please involve both the PR and IT department in all major changes, especially if they are visible to the user. Good luck!

## Workflow
It is strongly advised against to add commits directly to the master branch so as not to f things up. As a contributor to this site you are expected to know github on atleast an intermediate level.
Before you make any changes, please make sure you are not checked out on master ```git branch```. If you are, please checkout to your own branch ```git checkout -b my_branch``` and make a PR, pull request.

## Structure
This site was developed in angular, a front end framework. The built production version is under docs/. More about building below.

The sourcecode, from which the built production version is built, is located under src/. Angular uses the MVC architecture. https://sv.wikipedia.org/wiki/Model-View-Controller
Both the HTML and stylesheets are part of the view. If you are to change the logic in the model or controller you are expected to know what you are doing and know how to aquire this knowledge.

#### HTML
Angular divides the html into components, which are then added to src/app/app.module.ts. The html files to the respective component are located under their respective folder under src/app/.
In order to make the parallaxing work, most components are imported to the landing component. The navigation from the landing component to the student and organisation components are made with angular routing. https://angular.io/guide/router

#### CSS/SASS
The site is using sass https://sass-lang.com/. The general stylesheet is src/styles.sass, which imports some stylesheets from the src/assets/ folder. This is also where fonts, images, vectorized graphics, videos etc. should be located.
There are also stylesheets local to the components, which are found in their respective folder under src/app/. It is important to keep the site responsive to different screen sizes and types of devices. Please familiarize yourself with flexbox, viewports, em and percentages.

## Development
All development is made locally. If you are to contribute to the site, you are expected to be familiar with front end development aswell as angular on at least a beginner to intermediate level. That said, it could be the perfect opportunity to learn a new skill! To develop locally, initialize a new angular project called ceschalmers and replace the src/ folder with the folder in this repository. Some changes will need to be made to the angular.json file.
In order to build to the docs/ folder, the outputPath needs to be set to "docs" in the angular.json file (directory root): https://github.com/ceschalmers/2021/blob/master/angular.json#L20

There might be version conflicts if you are trying to develop locally. I used the following versions to develop:
- Angular CLI: 10.1.4
- Node: 12.18.3
- npm: 6.14.6

## Building the site
The site is hosted here on github pages. Github pages cannot host the sourcecode, and therefore the site needs to be built. The site will be built to the docs/ folder, which along with the branch is specified to be used by github pages under the repository settings.

The current domain is https://ceschalmers.se. To build the site with the current domain, use this **exact** command

```ng build --prod --source-map=false --baseHref="https://ceschalmers.se"```

***It is crucial that the --baseHref value is the same as the domain.*** Even a minor change, such as using http instead of https or adding an extra "/" at the end will make this fail.

Upon building the site, the CNAME file will be removed. Therefore, it is useful to unstage this deletion ```git restore --staged docs/CNAME```. The CNAME file can also be added back in the repository settings. ***If the contents of the CNAME file does not match the correct domain, or if there is none, the hosting will fail.***

If the page works locally but turns out blank or returns 404 error, the things above should be the first ones to check.

## Parallax
In webdesign, parallax is the art of making stuff scroll at different speeds to make the site more dynamic for the user. On this site it is achieved as such: https://medium.com/fove/angular-parallax-d1c2de9f07a6

## Modules included
#### ng-in-viewport
The ng-in-viewport module informs us of whether an element in the DOM is in the viewport. The viewport is whichever part of the page that is currently visible to the user. For example the text fading in and out when the user scrolls down to that very section is achieved with the help of this method.
https://www.npmjs.com/package/ng-in-viewport
